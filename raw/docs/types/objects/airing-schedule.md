---
title: "AiringSchedule"
description: "Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate."
canonical_url: "https://graphql-markdown.dev/docs/types/objects/airing-schedule"
---
# AiringSchedule

> Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.

Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.

```graphql
type AiringSchedule {
  id: Int!
  airingAt: Int!
  timeUntilAiring: Int!
  episode: Int!
  mediaId: Int!
  media: Media
}
```

### Fields

#### [`AiringSchedule`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the airing schedule item

#### [`AiringSchedule`.`airingAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the episode airs at

#### [`AiringSchedule`.`timeUntilAiring`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Seconds until episode starts airing

#### [`AiringSchedule`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The airing episode number

#### [`AiringSchedule`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The associate media id of the airing episode

#### [`AiringSchedule`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](https://graphql-markdown.dev/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The associate media of the airing episode

### Returned By

[`AiringSchedule`](https://graphql-markdown.dev/docs/operations/queries/airing-schedule)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`AiringScheduleConnection`](https://graphql-markdown.dev/docs/types/objects/airing-schedule-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`AiringScheduleEdge`](https://graphql-markdown.dev/docs/types/objects/airing-schedule-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Media`](https://graphql-markdown.dev/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

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
