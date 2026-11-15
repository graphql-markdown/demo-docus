---
title: "SaveThreadComment"
description: "Create or update a thread comment"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/save-thread-comment"
---
# SaveThreadComment

> Create or update a thread comment

Create or update a thread comment

```graphql
SaveThreadComment(
  id: Int
  threadId: Int
  parentCommentId: Int
  comment: String
  locked: Boolean
): ThreadComment
```

### Arguments

#### [`SaveThreadComment`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The comment id, required for updating

#### [`SaveThreadComment`.`threadId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of thread the comment belongs to

#### [`SaveThreadComment`.`parentCommentId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of thread comment to reply to

#### [`SaveThreadComment`.`comment`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The comment markdown text (Min: 1, Max: 12000)

#### [`SaveThreadComment`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the comment tree should be locked. (Mod Only)

### Type

#### [`ThreadComment`](https://graphql-markdown.dev/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread Comment


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
