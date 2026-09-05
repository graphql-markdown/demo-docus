# MediaTrend

> Daily media statistics

Daily media statistics

```graphql
type MediaTrend {
  mediaId: Int!
  date: Int!
  trending: Int!
  averageScore: Int
  popularity: Int
  inProgress: Int
  releasing: Boolean!
  episode: Int
  media: Media
}
```

### Fields

#### [`MediaTrend`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the tag

#### [`MediaTrend`.`date`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The day the data was recorded (timestamp)

#### [`MediaTrend`.`trending`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of media activity on the day

#### [`MediaTrend`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A weighted average score of all the user's scores of the media

#### [`MediaTrend`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of users with the media on their list

#### [`MediaTrend`.`inProgress`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of users with watching/reading the media

#### [`MediaTrend`.`releasing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media was being released at this time

#### [`MediaTrend`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The episode number of the anime released on this day

#### [`MediaTrend`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The related media

### Returned By

[`MediaTrend`](/docs/operations/queries/media-trend)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaTrendConnection`](/docs/types/objects/media-trend-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaTrendEdge`](/docs/types/objects/media-trend-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
