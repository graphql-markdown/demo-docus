# TagStats

> User's tag statistics

User's tag statistics

```graphql
type TagStats {
  tag: MediaTag
  amount: Int
  meanScore: Int
  timeWatched: Int
}
```

### Fields

#### [`TagStats`.`tag`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTag`](/docs/types/objects/media-tag) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`TagStats`.`amount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`TagStats`.`meanScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`TagStats`.`timeWatched`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of time in minutes the tag has been watched by the user

### Member Of

[`UserStats`](/docs/types/objects/user-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
