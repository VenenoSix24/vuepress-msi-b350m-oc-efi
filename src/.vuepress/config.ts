import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "为B350M而生",
  description: "MSI-B350M-OC-EFI的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

  theme: hopeTheme({
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"],
    },
  });
