import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/autoSideBar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog-vitePress/",
  head: [["link", { rel: "icon", href: "/blog-vitePress/logo.png" }]],
  title: "前端学习",
  description: "终身学习",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "目录",
    outline: [2, 6],
    nav: [
      {
        text: "知识",
        items: [
          { text: "vue", link: "/front-end/vue" },
          { text: "性能优化", link: "/" },
        ],
      },
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    sidebar: { "/front-end/vue": set_sidebar("front-end/vue") },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      copyright: "CopyRight @2025 Jia Feng",
    },
  },
});
