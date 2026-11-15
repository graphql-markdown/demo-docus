---
title: "AiringProgression"
description: "Score & Watcher stats for airing anime by episode and mid-week"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/airing-progression"
---
# AiringProgression

> Score & Watcher stats for airing anime by episode and mid-week

Score & Watcher stats for airing anime by episode and mid-week

```graphql
type AiringProgression {
  episode: Float
  score: Float
  watching: Int
}
```

### Fields

#### [`AiringProgression`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float`](https://graphql-markdown.dev/docs/types/scalars/float) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates.

#### [`AiringProgression`.`score`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float`](https://graphql-markdown.dev/docs/types/scalars/float) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The weighted average score for the media

#### [`AiringProgression`.`watching`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of users watching the anime

### Member Of

[`MediaStats`](https://graphql-markdown.dev/docs/types/objects/media-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
