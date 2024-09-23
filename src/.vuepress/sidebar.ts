import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // "portfolio",
    {
      text: "快速上手",
      icon: "rocket",
      prefix: "setup/",
      link: "setup/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "intro/",
      link: "intro/",
      children: "structure",
    },
    {
      text: "下载",
      icon: "cloud-arrow-down",
      prefix: "download/",
      link: "download/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
