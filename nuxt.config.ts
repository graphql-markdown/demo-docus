export default defineNuxtConfig({
  extends: ["docus"],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? "/",
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
