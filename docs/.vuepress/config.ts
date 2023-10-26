import { defineConfig } from "vuepress/config";

export default defineConfig({
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    nav: [
      {
        text: "前端",
        link: "/",
      },
      {
        text: "网络",
        link: "/",
      },
      {
        text: "随笔",
        link: "/",
      },
    ],
  },

  title: "Kyrie的个人博客",
  description: "前端菜鸡",
});
