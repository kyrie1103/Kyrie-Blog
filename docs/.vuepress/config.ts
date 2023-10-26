import { defineConfig } from "vuepress/config";

export default defineConfig({
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    nav: [
      {
        text: "前端",
        link: "/frontend/1",
      },
      {
        text: "网络",
        link: "/network",
      },
      {
        text: "随笔",
        link: "/note",
      },
    ],
    sidebar: [
      {
        title: "基础篇",
        path: "/frontend/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/frontend/1" },
          { title: "第二篇", path: "/frontend/2" },
        ],
      },
    ],
  },

  title: "Kyrie的个人博客",
  description: "前端菜鸡",
});
