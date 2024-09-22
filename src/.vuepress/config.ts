import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "B350M-OC-EFI",
  description: "B350M-OC-EFI的文档演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
