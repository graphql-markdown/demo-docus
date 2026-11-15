---
title: "SaveActivityReply"
description: "Create or update an activity reply"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/save-activity-reply"
---
# SaveActivityReply

> Create or update an activity reply

Create or update an activity reply

```graphql
SaveActivityReply(
  id: Int
  activityId: Int
  text: String
  asMod: Boolean
): ActivityReply
```

### Arguments

#### [`SaveActivityReply`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The activity reply id, required for updating

#### [`SaveActivityReply`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the parent activity being replied to

#### [`SaveActivityReply`.`text`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The reply text (Min: 2, Max: 8000)

#### [`SaveActivityReply`.`asMod`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the reply should be sent from the Moderator account (Mod Only)

### Type

#### [`ActivityReply`](https://graphql-markdown.dev/docs/types/objects/activity-reply) <badge color="neutral" size="sm" variant="subtle">object</badge>

Replay to an activity item


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
