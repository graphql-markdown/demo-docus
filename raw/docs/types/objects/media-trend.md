---
title: "MediaTrend"
description: "Daily media statistics"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/media-trend"
---
# MediaTrend

> Daily media statistics

Daily media statistics

```graphql
type MediaTrend {
  mediaId: Int!
  date: Int!
  trending: Int!
  averageScore: Int @deprecated
  weightedScore: Int
  popularity: Int
  inProgress: Int
  releasing: Boolean!
  episode: Int
  media: Media
}
```

### Fields

#### [`MediaTrend`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the tag

#### [`MediaTrend`.`date`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The day the data was recorded (timestamp)

#### [`MediaTrend`.`trending`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of media activity on the day

#### [`MediaTrend`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Use weightedScore

</accordion-item>
</accordion>

A weighted average score of all the user's scores of the media

#### [`MediaTrend`.`weightedScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A weighted average score of all the user's scores of the media

#### [`MediaTrend`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of users with the media on their list

#### [`MediaTrend`.`inProgress`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of users with watching/reading the media

#### [`MediaTrend`.`releasing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media was being released at this time

#### [`MediaTrend`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The episode number of the anime released on this day

#### [`MediaTrend`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](https://graphql-markdown.dev/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The related media

### Returned By

[`MediaTrend`](https://graphql-markdown.dev/docs/operations/queries/media-trend)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaTrendConnection`](https://graphql-markdown.dev/docs/types/objects/media-trend-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaTrendEdge`](https://graphql-markdown.dev/docs/types/objects/media-trend-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](https://graphql-markdown.dev/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
