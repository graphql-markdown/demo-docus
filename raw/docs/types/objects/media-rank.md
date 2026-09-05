# MediaRank

> The ranking of a media in a particular time span and format compared to other media

The ranking of a media in a particular time span and format compared to other media

```graphql
type MediaRank {
  id: Int!
  rank: Int!
  type: MediaRankType!
  format: MediaFormat!
  year: Int
  season: MediaSeason
  allTime: Boolean
  context: String!
}
```

### Fields

#### [`MediaRank`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the rank

#### [`MediaRank`.`rank`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The numerical rank of the media

#### [`MediaRank`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaRankType!`](/docs/types/enums/media-rank-type) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of ranking

#### [`MediaRank`.`format`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat!`](/docs/types/enums/media-format) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The format the media is ranked within

#### [`MediaRank`.`year`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The year the media is ranked within

#### [`MediaRank`.`season`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSeason`](/docs/types/enums/media-season) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The season the media is ranked within

#### [`MediaRank`.`allTime`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the ranking is based on all time instead of a season/year

#### [`MediaRank`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

String that gives context to the ranking type and time span

### Member Of

[`Media`](/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
