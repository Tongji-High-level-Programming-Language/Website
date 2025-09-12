import { defineConfig } from 'vitepress'

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
      { text: '资料', link: '/resources' },
      { text: '作业', link: '/assignments' },
      { text: '考试', link: '/exam' },
      { text: 'FAQ', link: '/faq' },
      { text: '扩展阅读', link: '/reading' },
      { text: '联系我们', link: '/contact' }
    ],

    sidebar: [
      {
        text: '开始学习',
        link: '/getting-started', 
      },
      {
        text: '常见问题',
        link: '/faq',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tongji-High-level-Programming-Language/Website' }
    ]
  }
})
