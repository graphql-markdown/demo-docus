export default {
  schema:
    "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql",
  extensions: {
    ["graphql-markdown"]: {
      rootPath: "./content",
      baseURL: "docs",
      linkRoot: "/",
      loaders: {
        UrlLoader: {
          module: "@graphql-tools/url-loader",
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
      telemetry: false,
    },
  },
};
