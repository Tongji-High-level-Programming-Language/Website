import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Website/', // Base URL for the site, for GitHub Pages
  lang: 'zh-Hans-CN',
  title: "同济高程",
  description: "同济大学高级语言程序设计课程网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tongji-High-level-Programming-Language/Website' }
    ]
  }
})
