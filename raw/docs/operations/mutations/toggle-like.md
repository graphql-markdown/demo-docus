---
title: "ToggleLike"
description: "Add or remove a like from a likeable type.\nReturns all the users who liked the same model"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/toggle-like"
---
# ToggleLike

> Add or remove a like from a likeable type.
> Returns all the users who liked the same model

Add or remove a like from a likeable type.
Returns all the users who liked the same model

```graphql
ToggleLike(
  id: Int
  type: LikeableType
): [User]
```

### Arguments

#### [`ToggleLike`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the likeable type

#### [`ToggleLike`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`LikeableType`](https://graphql-markdown.dev/docs/types/enums/likeable-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of model to be un/liked

### Type

#### [`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

A user


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
