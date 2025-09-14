# 扩展阅读

::: tip
如果你因为网络原因无法稳定访问一些海外网站（如 Github），可以试试[同济学术浏览器](https://nic.tongji.edu.cn/tjxsllq/list.htm)。

如果你不太适应阅读英语资料，可以使用诸如[沉浸式翻译](https://immersivetranslate.com/zh-Hans/)一类的浏览器插件,
配合 [DeepSeek API Key](https://immersivetranslate.com/zh-Hans/docs/services/deepseek/) 效果更佳。
但我们仍建议你锻炼英语阅读能力。
:::

## 计算机基础

[北京大学学生 Linux 俱乐部：计算机入门系列课程](https://missing.lcpu.dev/)

## 自学指南

[计算机科学自学指南](https://csdiy.wiki/) 汇总了全世界优秀的公开课，[CS 自学社区](https://www.learncs.site/) 提供了优秀的学习路线图以及大量中文资源。

特别地，对于初学者，我们强烈推荐哈佛大学的 [CS50X](https://cs50.harvard.edu/x/2023/) （编程入门与计算机科学概论） 和斯坦福大学的 [CS61A](https://cs61a.org/) （深入程序背后的思维方式，建立高阶抽象思维）。

## 程序设计

### 现代 C++

受限于课程容量，本课程所涉及到的知识基本限于 C++ 与 C 语言兼容的一个小子集。如果想要对课程未涉及的“现代C++”建立初步的了解，以下资源可能有所帮助：

+ [cppreference](https://en.cppreference.com/) 网络上内容最全、质量最高的 C++ 语法参考，可以解决绝大部分语法上的疑难问题。网站原本有官方中文，但由于网站作者对项目的维护升级暂时关闭，可以使用网络上的[中文镜像](https://cppreference.cn/w/)。
+ 斯坦福大学开设的补充性课程 [CS106L](https://web.stanford.edu/class/cs106l/)，在初步掌握面向对象基础知识后即可学习，内容较为浅显，但覆盖了核心概念，也提供了不错的课后练习。
+ [Awesome Modern C++](https://github.com/rigtorp/awesome-modern-cpp) 项目列出了大量关于现代 C++ 资源，
包括书籍、社区资源、第三方库、工具等。
+ 大型项目的编写与组织离不开对构建系统的理解：
  + [Makefile](https://www.gnu.org/software/make/manual/make.html) 历史悠久，在众多古典 Unix 项目中被广泛使用。虽然不推荐在新项目中使用，但仍然建议掌握。
  + [CMake](https://cmake.org/) 是当前 C++ 社区的事实标准。尽管其语法、设计和文档多有被人诟病之处，但其良好的生态使其在可预料的未来中不会被淘汰。[Modern CMake for C++](/Modern-CMake-for-C++.pdf) 这本书系统讲解了使用 CMake 的最佳实践。
  + [XMake](https://xmake.io/) 是社区在新一代构建工具的尝试之一（顺带一提，其主导开发者是国人），简单易用，功能强大，也对 CMake 等构建系统提供了兼容。


### Python

作为现代使用最为广泛的编程语言，Python 轻巧、灵活、生态良好，几乎可以在任何领域发挥作用。
无论是人工智能的学习研究，还是编写一个脚本自动化日常杂务，Python 都是极佳的选择。

官方提供的 [入门资料合集](https://wiki.python.org/moin/BeginnersGuide/NonProgrammersChinese) 与 [中文教程](https://docs.python.org/zh-cn/3/tutorial/index.html) 质量都非常不错。
加州伯克利大学面向新生的著名课程 [CS61A](https://cs61a.org/) 同样可以用来学习 Python（尽管其教学内容远不止于语言入门）。

## 关于编译器、编辑器和IDE的区别

**编译器**是一个工具，可以理解为“翻译器”，用于将程序员写出的代码转换成CPU能够执行的二进制指令，也就是**将代码加工成 exe 程序**，编译器可以理解为一种特殊的exe可执行文件。
典型的编译器是gcc和g++，分别用于编译c语言代码和c++语言代码，你可以在dev-cpp安装的文件夹中找到它（如果默认路径安装的话是`C:\Program Files (x86)\Dev-Cpp\MinGW64\bin`）
编译器能够识别代码中的词汇、句子以及各种特定的格式，并将他们转换成计算机能够识别的二进制形式，这个过程称为编译（compile）。

**编辑器**是用于**编写代码的文本编辑器**，windows自带的记事本软件就是一种编辑器，~~word也是一种编辑器~~，常用的编辑器一般会提供自动缩进，语法高亮等功能。
典型的编辑器是Visual Studio Code，在不进行任何配置的情况下，它只能用来写代码，而不能进行诸如编译或调试的操作。

**IDE**是**集成开发环境**（integrated development environment）的缩写，将编辑器、编译器、调试器、版本控制系统等工具集于一身，是一系列开发工具的组合套装。
典型的IDE是Visual Studio和Dev-cpp，两者都具备了编辑，编译，调试功能的集成，VS在此基础上还有版本控制，智能提示，代码补全等更多功能。可以大幅提升开发效率。

三者各司其职又相互协作：程序员在编辑器中编写代码，通过编译器转换为可执行文件，而IDE将这一流程无缝集成，提供一站式开发体验，更多内容可参考[什么是编译器？什么是集成开发环境？](https://zhuanlan.zhihu.com/p/87082118)和[什么是ide？](https://www.codecademy.com/article/what-is-ide)