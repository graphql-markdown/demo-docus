---
title: "deprecated"
description: "Marks an element of a GraphQL schema as no longer supported."
canonical_url: "https://graphql-markdown.dev/docs/types/directives/deprecated"
---
# deprecated

> Marks an element of a GraphQL schema as no longer supported.

Marks an element of a GraphQL schema as no longer supported.

```graphql
directive @deprecated(
  reason: String
) on 
  | FIELD_DEFINITION
  | ENUM_VALUE
```

### Arguments

#### [`deprecated`.`reason`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted in [Markdown](https://daringfireball.net/projects/markdown/).


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
