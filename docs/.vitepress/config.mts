import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "二次元社区官网",
  description: "SCP秘密实验室服务器-二次元社区官方网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/introduce' }
    ],

    sidebar: [
      {
        items: [
          { text: '介绍', link: '/introduce' }
        ]
      },
      {
        text: '随机事件',
        items: [
          { text: '所有事件列表', link: '/introduce' },
          { text: '生态', link: '/ecology' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2DServer/' }
    ]
  }
})
