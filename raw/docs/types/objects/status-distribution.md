# StatusDistribution

> The distribution of the watching/reading status of media or a user's list

The distribution of the watching/reading status of media or a user's list

```graphql
type StatusDistribution {
  status: MediaListStatus
  amount: Int
}
```

### Fields

#### [`StatusDistribution`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The day the activity took place (Unix timestamp)

#### [`StatusDistribution`.`amount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries with this status

### Member Of

[`MediaStats`](/docs/types/objects/media-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserStats`](/docs/types/objects/user-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
