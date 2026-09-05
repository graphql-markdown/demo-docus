# UserStatusStatistic

> No description

No description

```graphql
type UserStatusStatistic {
  count: Int!
  meanScore: Float!
  minutesWatched: Int!
  chaptersRead: Int!
  mediaIds: [Int]!
  status: MediaListStatus
}
```

### Fields

#### [`UserStatusStatistic`.`count`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatusStatistic`.`meanScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float!`](/docs/types/scalars/float) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatusStatistic`.`minutesWatched`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatusStatistic`.`chaptersRead`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatusStatistic`.`mediaIds`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatusStatistic`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

### Member Of

[`UserStatistics`](/docs/types/objects/user-statistics)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
