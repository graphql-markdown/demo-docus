---
title: "SiteTrend"
description: "Daily site statistics"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/site-trend"
---
# SiteTrend

> Daily site statistics

Daily site statistics

```graphql
type SiteTrend {
  date: Int!
  count: Int!
  change: Int!
}
```

### Fields

#### [`SiteTrend`.`date`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The day the data was recorded (timestamp)

#### [`SiteTrend`.`count`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`SiteTrend`.`change`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The change from yesterday

### Member Of

[`SiteTrendConnection`](https://graphql-markdown.dev/docs/types/objects/site-trend-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`SiteTrendEdge`](https://graphql-markdown.dev/docs/types/objects/site-trend-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
