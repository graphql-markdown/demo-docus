// Formatter paths must be absolute: a relative path is not resolved from the project folder
const local = (path) => new URL(path, import.meta.url).href;

const schema =
  "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql";

const loaders = {
  UrlLoader: {
    module: "@graphql-tools/url-loader",
  },
};

const printTypeOptions = {
  typeBadges: true,
};

export default {
  projects: {
    default: {
      schema,
      extensions: {
        ["graphql-markdown"]: {
          rootPath: "./content",
          baseURL: "docs",
          linkRoot: "/",
          loaders,
          printTypeOptions,
          formatter: local("./lib/docus-formatter.mjs"),
          docOptions: {
            sectionHeaderId: false,
          },
          homepage: "./assets/index.md",
          telemetry: false,
        },
      },
    },
    // Plain Markdown copy of every page, served from public/ (`npm run copies`)
    markdown: {
      schema,
      extensions: {
        ["graphql-markdown"]: {
          rootPath: "./.markdown-copies",
          baseURL: "docs",
          loaders,
          printTypeOptions,
          formatter: local("./lib/markdown-copy.mjs"),
          homepage: false,
          docOptions: {
            sectionHeaderId: false,
          },
          telemetry: false,
          force: true,
        },
      },
    },
  },
};
