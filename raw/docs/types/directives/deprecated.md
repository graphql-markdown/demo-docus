---
title: "deprecated"
canonical_url: "https://graphql-markdown.dev/docs/types/directives/deprecated"
---
# deprecated

Marks an element of a GraphQL schema as no longer supported.

```graphql
directive @deprecated(
  reason: String!
) on 
  | FIELD_DEFINITION
  | ARGUMENT_DEFINITION
  | INPUT_FIELD_DEFINITION
  | ENUM_VALUE
  | DIRECTIVE_DEFINITION
```

### Arguments

#### [`deprecated`.`reason`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
