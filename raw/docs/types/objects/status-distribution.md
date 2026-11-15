---
title: "StatusDistribution"
description: "The distribution of the watching/reading status of media or a user's list"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/status-distribution"
---
# StatusDistribution

> The distribution of the watching/reading status of media or a user's list

The distribution of the watching/reading status of media or a user's list

```graphql
type StatusDistribution {
  status: MediaListStatus
  amount: Int
}
```

### Fields

#### [`StatusDistribution`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](https://graphql-markdown.dev/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The day the activity took place (Unix timestamp)

#### [`StatusDistribution`.`amount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries with this status

### Member Of

[`MediaStats`](https://graphql-markdown.dev/docs/types/objects/media-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserStats`](https://graphql-markdown.dev/docs/types/objects/user-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
