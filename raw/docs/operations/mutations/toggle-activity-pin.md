---
title: "ToggleActivityPin"
description: "Toggle activity to be pinned to the top of the user's activity feed"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/toggle-activity-pin"
---
# ToggleActivityPin

> Toggle activity to be pinned to the top of the user's activity feed

Toggle activity to be pinned to the top of the user's activity feed

```graphql
ToggleActivityPin(
  id: Int
  pinned: Boolean
): ActivityUnion
```

### Arguments

#### [`ToggleActivityPin`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Toggle activity id to be pinned

#### [`ToggleActivityPin`.`pinned`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity should be pinned or unpinned

### Type

#### [`ActivityUnion`](https://graphql-markdown.dev/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

Activity union type


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
