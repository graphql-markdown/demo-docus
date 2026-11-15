---
title: "ToggleActivitySubscription"
description: "Toggle the subscription of an activity item"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/toggle-activity-subscription"
---
# ToggleActivitySubscription

> Toggle the subscription of an activity item

Toggle the subscription of an activity item

```graphql
ToggleActivitySubscription(
  activityId: Int
  subscribe: Boolean
): ActivityUnion
```

### Arguments

#### [`ToggleActivitySubscription`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity to un/subscribe

#### [`ToggleActivitySubscription`.`subscribe`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether to subscribe or unsubscribe from the activity

### Type

#### [`ActivityUnion`](https://graphql-markdown.dev/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

Activity union type


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
