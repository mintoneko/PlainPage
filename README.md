<div align="center">
  <img src="./public/favicon-show.svg" alt="PlainPage" width="100" />
</div>

# PlainPage

A fast, text-focused, minimalist blog.

Here is the personalized modification of PlainPage. For details, please refer to the original author’s repository and template. ⛄️

[English](./README.md) | [中文](./README.zh-CN.md)

## Live Demo

- [Demo](https://blog.loliowo.com)

## Features

- 🚀 Fast: 100% static, no server-side rendering
- 📖 Simple: Just markdown files
- 🌈 Customizable: Customize the theme and layout
- 📚 SEO-friendly: Support for SEO
- 📱 Responsive: Support for mobile devices
- 📦 Based on [astro](https://astro.build) version latest

## ✅ Lighthouse Score

[![lighthouse](./screenshots/lighthouse-score.svg)](https://pagespeed.web.dev/analysis/https-churchtao-github-io-PlainPage/e1mpmv9swy?form_factor=desktop)

## Screenshots

![light](./screenshots/light.png)
![dark](./screenshots/dark.png)

## 🚀 Project Structure

```text
├── public/                # Static assets directory for public resources like images, fonts, etc.
├── src/                   # Source code directory, containing the main application code.
│   ├── components/        # Reusable UI components for building the application.
│   ├── content/           # Content directory for storing static content like Markdown files.
│   ├── layouts/           # Layout components used for page structures.
│   ├── pages/             # Pages directory, where each file corresponds to a route in the application.
│   └── consts.ts          # Constants file for defining global configuration or constants.
├── astro.config.mjs       # Astro configuration file for build options, plugins, and project settings.
├── README.md              # Project readme file containing basic information and usage instructions.
├── package.json           # Node.js package file for managing dependencies and scripts.
└── tsconfig.json          # TypeScript configuration file for setting TypeScript compiler options.
```

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

All configuration is in `src/consts.ts`.

```ts
// src/consts.ts

// site config
export const SITE_TITLE = "PlainPage";
export const SITE_DESCRIPTION = "Welcome (. ❛ ᴗ ❛.)";
export const COPYRIGHT = "© 2024 PlainPage All Rights Reserved";
export const ICP_NUMBER = "";

// social links, empty or commented out = not displayed
export const SOCIAL_LINKS = {
  Github: "https://github.com/yourGithub",
  //   Twitter: "https://twitter.com/yourusername",
  //   LinkedIn: "https://www.linkedin.com/in/yourusername",
  //   Instagram: "https://www.instagram.com/yourusername",
  //   Facebook: "https://www.facebook.com/yourusername",
  //   YouTube: "https://www.youtube.com/yourusername",
};

// SEO related
export const SEO_CONFIG = {
  ogImage: "/hero-img.png", // default social media share image
  keywords: "blog, tech, programming", // default keywords
};

// navigation config
export const NAV_ITEMS = [
  { text: "Home", link: "/" },
  { text: "Blog", link: "/blog" },
  { text: "Tags", link: "/tags" },
  { text: "About", link: "/about" },
];

// blog config
export const BLOG_CONFIG = {
  locale: "en-us", // date format language
  authorName: "Author Name", // author name
  email: "mailto:your-email@example.com",
  tags: {
    title: "Tags", // tags page title
    description: "All the tags used in posts.", // tags page description
  },
};
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

Inspired by [satnaing/astro-paper](https://github.com/satnaing/astro-paper).

Forked from [PlainPage](https://github.com/ChurchTao/PlainPage)

Based on [astro](https://astro.build).

## Sites using this theme

- [毛桃的小世界](https://毛桃.top)
- [Mobai's blog](https://blog.loliowo.com)

👏 You can submit your site to the list by creating a PR.

## 📜 License

Licensed under the [MIT](./LICENSE) License, Copyright © 2025
