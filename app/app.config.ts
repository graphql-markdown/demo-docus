export default defineAppConfig({
  seo: {
    title: "GraphQL-Markdown + Docus demo",
    description: "GraphQL schema documentation generated with GraphQL-Markdown.",
  },
  header: {
    title: "GraphQL-Markdown",
  },
  // No "Edit this page" / "Report an issue" links: Docus builds them from
  // `github`, so it is off and the repo link lives in the footer socials.
  github: false,
  socials: {
    github: "https://github.com/graphql-markdown/demo-docus",
  },
  ui: {
    colors: {
      primary: "green",
      neutral: "zinc",
    },
    // No prev/next page navigation: Docus always renders <UContentSurround>,
    // so its root slot is hidden through the Nuxt UI theme config.
    contentSurround: {
      slots: {
        root: "hidden",
      },
    },
  },
})
