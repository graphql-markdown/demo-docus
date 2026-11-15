---
title: "Follower"
description: "Follower query"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/follower"
---
# Follower

> Follower query

Follower query

```graphql
Follower(
  userId: Int!
  sort: [UserSort]
): User
```

### Arguments

#### [`Follower`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

User id of the follower/followed

#### [`Follower`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](https://graphql-markdown.dev/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

A user


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
