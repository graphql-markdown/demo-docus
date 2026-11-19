export default defineNuxtConfig({
  extends: ["docus"],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? "/",
  },
  // Every demo shares the graphql-markdown.dev origin, so each one needs its
  // own localStorage key or toggling the theme in one changes them all.
  colorMode: {
    preference: "system",
    storageKey: "gqlmd-demo-docus-color-mode",
  },
  // Docus ships @nuxt/sitemap and @nuxt/robots. The sitemap needs the site's
  // public origin to prerender.
  site: {
    url: "https://graphql-markdown.dev",
  },
  // The demo is served from a subpath (NUXT_APP_BASE_URL), where a robots.txt
  // has no effect: crawlers only read it at the domain root.
  robots: {
    robotsTxt: false,
  },
  content: {
    build: {
      markdown: {
        // Docus only preloads a handful of Shiki languages, `graphql` is not
        // one of them, so schema code blocks would render unhighlighted.
        highlight: {
          langs: ["graphql"],
        },
      },
    },
  },
})
