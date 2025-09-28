<script setup lang="ts">
import { ref, watch } from 'vue';
import { Decimal } from 'decimal.js';

Decimal.set({ precision: 112 });

const numberInput = ref<string>('');

const validateInput = (value: string) => {
    const regex = /^([01]{0,112})$/;
    return regex.test(value);
};

const binaryOutput = ref<string>();

watch(numberInput, (newVal: string, oldVal: string) => {
    if (!validateInput(newVal)) {
        numberInput.value = oldVal;
    } else {
        binaryOutput.value = computeBinaryToDecimal(newVal);
    }
});

function computeBinaryToDecimal(binaryStr: string): string | null {
    if (binaryStr === '') {
        return null;
    }
    let decimalValue: Decimal = new Decimal(0);
    let base = new Decimal(1);
    for (let i = 0; i < binaryStr.length; i++) {
        base = base.dividedBy(2);
        if (binaryStr[i] === '1') {
            decimalValue = decimalValue.add(base);
        }
    }
    return decimalValue.toFixed();
}

</script>

<template>
    <div class="mt-8 p-4 bg-gray-50 rounded-md">
        <div class="mb-4">
            <label for="number_input" class="block text-sm font-medium text-gray-700 mb-2">
                输入一个二进制纯小数
                <span class="text-xs text-gray-500 font-normal">（{{ numberInput.length }}/112 位）</span>
            </label>
            <div class="mt-1 font-mono flex items-center space-x-0.5">
                <span class=" text-gray-700 font-mono text-lg">0.</span>
                <input type="text" v-model="numberInput" id="number_input" class="w-full px-4 py-3 pr-20 font-mono text-lg !border-2 !border-gray-300 rounded-lg 
                    focus:!border-blue-500 focus:!boder-2 focus:outline-none focus:ring-2 focus:ring-blue-200 
                    transition-all duration-200 placeholder-gray-400" placeholder="101101" />
            </div>

            <div class="text-sm text-gray-600 mt-4 mb-2">对应十进制小数：</div>

            <div
                class="mt-1 p-2 bg-gray-100 rounded-lg border border-gray-200 font-mono text-blue-600 font-semibold break-all">
                {{ binaryOutput || 'N/A' }}
            </div>
        </div>
    </div>
</template>