import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "笔记",
    icon: "note",
    prefix: "/笔记/",
    children: [
      {
        text: "大数据",
        icon: "edit",
        prefix: "大数据技术/",
        children: [{ text: "大数据分析", icon: "note", link: "data_analyse" }],
      },
      {
        text: "英语",
        icon: "edit",
        prefix: "英语/",
        children: [{ text: "单词本", icon: "note", link: "单词本" }],
      },
    ],
  },
  {
    text: "攻略",
    icon: "read",
    prefix: "/攻略/",
    children: [
      {
        text: "游戏",
        icon: "strong",
        prefix: "游戏/",
        children: [{ text: "原神", icon: "page", link: "原神" }],
      },
    ],
  },
  {
    text: "教程",
    icon: "blog",
    prefix: "/教程/",
    children: [
      {
        text: "应用",
        icon: "software",
        prefix: "应用/",
        children: [{ text: "云崽", icon: "anonymous", link: "云崽" }],
      },
    ],
  },
]);
