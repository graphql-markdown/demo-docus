---
title: "MediaTrend"
description: "Media Trend query"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/media-trend"
---
# MediaTrend

> Media Trend query

Media Trend query

```graphql
MediaTrend(
  mediaId: Int
  date: Int
  trending: Int
  averageScore: Int
  weightedScore: Int
  popularity: Int
  episode: Int
  releasing: Boolean
  mediaId_not: Int
  mediaId_in: [Int]
  mediaId_not_in: [Int]
  date_greater: Int
  date_lesser: Int
  trending_greater: Int
  trending_lesser: Int
  trending_not: Int
  averageScore_greater: Int
  averageScore_lesser: Int
  averageScore_not: Int
  weightedScore_greater: Int
  weightedScore_lesser: Int
  weightedScore_not: Int
  popularity_greater: Int
  popularity_lesser: Int
  popularity_not: Int
  episode_greater: Int
  episode_lesser: Int
  episode_not: Int
  sort: [MediaTrendSort]
): MediaTrend
```

### Arguments

#### [`MediaTrend`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

#### [`MediaTrend`.`date`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

#### [`MediaTrend`.`trending`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

#### [`MediaTrend`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

#### [`MediaTrend`.`weightedScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by weighted scores

#### [`MediaTrend`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

#### [`MediaTrend`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

#### [`MediaTrend`.`releasing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to stats recorded while the media was releasing

#### [`MediaTrend`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

#### [`MediaTrend`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

#### [`MediaTrend`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

#### [`MediaTrend`.`date_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

#### [`MediaTrend`.`date_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

#### [`MediaTrend`.`trending_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

#### [`MediaTrend`.`trending_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

#### [`MediaTrend`.`trending_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

#### [`MediaTrend`.`averageScore_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

#### [`MediaTrend`.`averageScore_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

#### [`MediaTrend`.`averageScore_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

#### [`MediaTrend`.`weightedScore_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by weighted scores

#### [`MediaTrend`.`weightedScore_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by weighted scores

#### [`MediaTrend`.`weightedScore_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by weighted scores

#### [`MediaTrend`.`popularity_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

#### [`MediaTrend`.`popularity_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

#### [`MediaTrend`.`popularity_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

#### [`MediaTrend`.`episode_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

#### [`MediaTrend`.`episode_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

#### [`MediaTrend`.`episode_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

#### [`MediaTrend`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrendSort`](https://graphql-markdown.dev/docs/types/enums/media-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`MediaTrend`](https://graphql-markdown.dev/docs/types/objects/media-trend) <badge color="neutral" size="sm" variant="subtle">object</badge>

Daily media statistics


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
