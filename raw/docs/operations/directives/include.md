---
title: "include"
canonical_url: "https://graphql-markdown.dev/docs/operations/directives/include"
---
# include

Directs the executor to include this field or fragment only when the `if` argument is true.

```graphql
directive @include(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```

### Arguments

#### `include`.`if`<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Included when true.

[View as Markdown](https://graphql-markdown.dev/demo-docus/docs/operations/directives/include.md)


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
