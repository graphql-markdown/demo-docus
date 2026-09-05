# UserTagStatistic

> No description

No description

```graphql
type UserTagStatistic {
  count: Int!
  meanScore: Float!
  minutesWatched: Int!
  chaptersRead: Int!
  mediaIds: [Int]!
  tag: MediaTag
}
```

### Fields

#### [`UserTagStatistic`.`count`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserTagStatistic`.`meanScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float!`](/docs/types/scalars/float) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserTagStatistic`.`minutesWatched`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserTagStatistic`.`chaptersRead`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserTagStatistic`.`mediaIds`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserTagStatistic`.`tag`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTag`](/docs/types/objects/media-tag) <badge color="neutral" size="sm" variant="subtle">object</badge>

### Member Of

[`UserStatistics`](/docs/types/objects/user-statistics)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
