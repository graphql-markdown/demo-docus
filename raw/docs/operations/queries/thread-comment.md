---
title: "ThreadComment"
description: "Comment query"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/thread-comment"
---
# ThreadComment

> Comment query

Comment query

```graphql
ThreadComment(
  id: Int
  threadId: Int
  userId: Int
  sort: [ThreadCommentSort]
): [ThreadComment]
```

### Arguments

#### [`ThreadComment`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the comment id

#### [`ThreadComment`.`threadId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id

#### [`ThreadComment`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the comment's creator

#### [`ThreadComment`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadCommentSort`](https://graphql-markdown.dev/docs/types/enums/thread-comment-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`ThreadComment`](https://graphql-markdown.dev/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread Comment


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
