---
title: "MediaStats"
description: "A media's statistics"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/media-stats"
---
# MediaStats

> A media's statistics

A media's statistics

```graphql
type MediaStats {
  scoreDistribution: [ScoreDistribution]
  statusDistribution: [StatusDistribution]
  airingProgression: [AiringProgression] @deprecated
}
```

### Fields

#### [`MediaStats`.`scoreDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreDistribution`](https://graphql-markdown.dev/docs/types/objects/score-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaStats`.`statusDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`StatusDistribution`](https://graphql-markdown.dev/docs/types/objects/status-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaStats`.`airingProgression`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringProgression`](https://graphql-markdown.dev/docs/types/objects/airing-progression) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Replaced by MediaTrends

</accordion-item>
</accordion>

### Member Of

[`Media`](https://graphql-markdown.dev/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
