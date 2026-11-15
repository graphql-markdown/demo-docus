---
title: "User"
description: "User query"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/user"
---
# User

> User query

User query

```graphql
User(
  id: Int
  name: String
  isModerator: Boolean
  search: String
  sort: [UserSort]
): User
```

### Arguments

#### [`User`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id

#### [`User`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the name of the user

#### [`User`.`isModerator`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to moderators only if true

#### [`User`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

#### [`User`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](https://graphql-markdown.dev/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

A user


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
