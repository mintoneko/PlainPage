// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: "https://mintoneko.github.io",
  site:"https://blog.loliowo.com",
  // 部署到 github pages 时，需要设置 base, 自己使用时，可以酌情设置
  // 还是直接使用根路径比价好吧
  base: "/",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "min-light",
        dark: "github-dark",
      },
      wrap: true,
    },
  },
});