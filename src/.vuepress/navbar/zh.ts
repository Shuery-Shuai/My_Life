import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
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
          { text: "云崽", icon: "software", link: "../../category/云崽/" },
        ],
      },
      {
        text: "笔记",
        icon: "edit",
        prefix: "笔记/",
        children: [
          {
            text: "香蕉 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "edit", link: "cherry" },
      { text: "火龙果", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
