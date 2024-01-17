import { searchProPlugin } from "vuepress-plugin-search-pro";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "锐毅的生活记录分享馆",
      description: "记录并分享一些有趣的事情。",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [],
});
