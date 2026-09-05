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

#### [`MediaStats`.`scoreDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreDistribution`](/docs/types/objects/score-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaStats`.`statusDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`StatusDistribution`](/docs/types/objects/status-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaStats`.`airingProgression`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringProgression`](/docs/types/objects/airing-progression) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Replaced by MediaTrends

</accordion-item>
</accordion>

### Member Of

[`Media`](/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
