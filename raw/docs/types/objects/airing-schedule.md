# AiringSchedule

> Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.

Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.

```graphql
type AiringSchedule {
  id: Int!
  airingAt: Int!
  timeUntilAiring: Int!
  episode: Int!
  mediaId: Int!
  media: Media
}
```

### Fields

#### [`AiringSchedule`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the airing schedule item

#### [`AiringSchedule`.`airingAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the episode airs at

#### [`AiringSchedule`.`timeUntilAiring`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Seconds until episode starts airing

#### [`AiringSchedule`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The airing episode number

#### [`AiringSchedule`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The associate media id of the airing episode

#### [`AiringSchedule`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The associate media of the airing episode

### Returned By

[`AiringSchedule`](/docs/operations/queries/airing-schedule)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`AiringScheduleConnection`](/docs/types/objects/airing-schedule-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`AiringScheduleEdge`](/docs/types/objects/airing-schedule-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Media`](/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
