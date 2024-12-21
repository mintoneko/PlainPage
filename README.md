<div align="center">
  <img src="./public/favicon.svg" alt="PlainPage" width="100" />
</div>

# PlainPage

A fast, text-focused, minimalist blog.

## Live Demo

[github pages](https://churchtao.github.io/PlainPage/)

## Features

- 🚀 Fast: 100% static, no server-side rendering
- 📖 Simple: Just markdown files
- 🌈 Customizable: Customize the theme and layout
- 📚 SEO-friendly: Support for SEO
- 📱 Responsive: Support for mobile devices
- 📦 Based on [astro](https://astro.build) version latest

## ✅ Lighthouse Score

[![lighthouse](/screenshots/lighthouse-score.svg)](https://pagespeed.web.dev/analysis/https-churchtao-github-io-PlainPage/e1mpmv9swy?form_factor=desktop)

## Screenshots

![light](/screenshots/light.png)
![dark](/screenshots/dark.png)

## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── consts.ts
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

All configuration is in `src/consts.ts`.

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

Based on [astro](https://astro.build).

## 📜 License

Licensed under the [MIT](./LICENSE) License, Copyright © 2024
