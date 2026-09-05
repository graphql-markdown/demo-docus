export default {
  schema: "https://graphql.anilist.co/",
  extensions: {
    ["graphql-markdown"]: {
      rootPath: "./content",
      baseURL: "docs",
      linkRoot: "/",
      loaders: {
        UrlLoader: {
          module: "@graphql-tools/url-loader",
          options: { method: "POST" },
        },
      },
      printTypeOptions: {
        typeBadges: true,
      },
      formatter: `${__dirname}/lib/docus-formatter.mjs`,
      docOptions: {
        sectionHeaderId: false,
      },
      homepage: "./assets/index.md",
    },
  },
};
