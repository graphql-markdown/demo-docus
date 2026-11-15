---
title: "UserModData"
description: "User data for moderators"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/user-mod-data"
---
# UserModData

> User data for moderators

User data for moderators

```graphql
type UserModData {
  bans: Json
  browserAlts: [User]
  ip: Json
  ipAlts: [User]
  counts: Json
  email: String
}
```

### Fields

#### [`UserModData`.`bans`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](https://graphql-markdown.dev/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserModData`.`browserAlts`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserModData`.`ip`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](https://graphql-markdown.dev/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserModData`.`ipAlts`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserModData`.`counts`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](https://graphql-markdown.dev/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserModData`.`email`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
