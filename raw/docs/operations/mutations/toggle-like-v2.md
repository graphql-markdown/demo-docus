---
title: "ToggleLikeV2"
description: "Add or remove a like from a likeable type."
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/toggle-like-v2"
---
# ToggleLikeV2

> Add or remove a like from a likeable type.

Add or remove a like from a likeable type.

```graphql
ToggleLikeV2(
  id: Int
  type: LikeableType
): LikeableUnion
```

### Arguments

#### [`ToggleLikeV2`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the likeable type

#### [`ToggleLikeV2`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`LikeableType`](https://graphql-markdown.dev/docs/types/enums/likeable-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of model to be un/liked

### Type

#### [`LikeableUnion`](https://graphql-markdown.dev/docs/types/unions/likeable-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

Likeable union type


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
