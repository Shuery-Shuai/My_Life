import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "笔记",
      icon: "note",
      prefix: "笔记",
      children: "structure",
    },
    {
      text: "攻略",
      icon: "read",
      prefix: "攻略",
      children: "structure",
    },
    {
      text: "教程",
      icon: "blog",
      prefix: "教程",
      children: "structure",
    },
  ],
});
