# UserActivityHistory

> A user's activity history stats for the previous 6 months. Refreshes only periodically

A user's activity history stats for the previous 6 months. Refreshes only periodically

```graphql
type UserActivityHistory {
  date: Int
  amount: Int
  level: Int
}
```

### Fields

#### [`UserActivityHistory`.`date`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The day the activity took place (Unix timestamp)

#### [`UserActivityHistory`.`amount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of activity on the day

#### [`UserActivityHistory`.`level`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The level of activity represented on a 1-10 scale

### Member Of

[`UserStats`](/docs/types/objects/user-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
