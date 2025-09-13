import { defineConfig } from 'vitepress'

// From: https://www.afunny.top/vitepress-search
// 自定义分词函数
function customTokenizer(text: string): string[] {
  // 去除空格，每个字分词
  return Array.from(new Intl.Segmenter('cn', { granularity: 'word' }).segment(text.replace(/ /g, ''))).map(item => item.segment)
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Website/', // Base URL for the site, for GitHub Pages
  lang: 'zh-Hans-CN',
  title: "同济高程",
  description: "同济大学高级语言程序设计课程网站",
  head: [
    ['link', { rel: 'icon', href: '/Website/Tongji.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: '本站全部内容在<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">知识共享 署名-非商业性使用-相同方式共享 4.0 协议</a>之条款下提供',
      copyright: '©2025 同济大学 版权所有'
    },
    logo: {
      src: '/Tongji.svg',
      alt: 'Tongji University'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '课程', link: '/syllabus' },
      { text: '资源', link: '/resources' },
      { text: '作业', link: '/assignments' },
      { text: '考试', link: '/exam' },
      { text: 'FAQ', link: '/faq' },
      { text: '扩展阅读', link: '/reading' },
      { text: '联系我们', link: '/contact' }
    ],

    sidebar: [
      {
        text: '课程介绍',
        link: '/syllabus',
      },
      {
        text: '开始学习',
        link: '/getting-started/', 
      },
      {
        text: '学会提问',
        link: '/ask-question/',
      },
      {
        text: '常见问题',
        link: '/faq/',
      },
      {
        text: '扩展阅读',
        link: '/reading/',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tongji-High-level-Programming-Language/Website' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  navigateText: '导航',
                  closeText: '关闭',
                }
              }
            }
          }
        },
        miniSearch: {
          options: {
            tokenize: customTokenizer
          }
        }
      }
    }
  }
})
