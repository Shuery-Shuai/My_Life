import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "笔记",
    icon: "edit",
    prefix: "/笔记/",
    children: [
      {
        text: "大数据",
        icon: "edit",
        prefix: "大数据技术/",
        children: [{ text: "大数据分析", icon: "edit", link: "data_analyse" }],
      },
      {
        text: "英语",
        icon: "edit",
        prefix: "英语/",
        children: [{ text: "单词本", icon: "edit", link: "单词本" }],
      },
    ],
  },
  {
    text: "教程",
    icon: "discover",
    prefix: "/教程/",
    children: [
      {
        text: "应用",
        icon: "software",
        prefix: "应用/",
        children: [
          {
            text: "云崽",
            icon: "software",
            prefix: "云崽/",
            children: [
              { text: "安装", icon: "software", link: "云崽安装教程.md" },
            ],
          },
        ],
      },
    ],
  }
]);
