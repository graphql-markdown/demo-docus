# MediaTag

> A tag that describes a theme or element of the media

A tag that describes a theme or element of the media

```graphql
type MediaTag {
  id: Int!
  name: String!
  description: String
  category: String
  rank: Int
  isGeneralSpoiler: Boolean
  isMediaSpoiler: Boolean
  isAdult: Boolean
  userId: Int
}
```

### Fields

#### [`MediaTag`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the tag

#### [`MediaTag`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name of the tag

#### [`MediaTag`.`description`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A general description of the tag

#### [`MediaTag`.`category`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The categories of tags this tag belongs to

#### [`MediaTag`.`rank`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The relevance ranking of the tag out of the 100 for this media

#### [`MediaTag`.`isGeneralSpoiler`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the tag could be a spoiler for any media

#### [`MediaTag`.`isMediaSpoiler`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the tag is a spoiler for this media

#### [`MediaTag`.`isAdult`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the tag is only for adult 18+ media

#### [`MediaTag`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user who submitted the tag

### Returned By

[`MediaTagCollection`](/docs/operations/queries/media-tag-collection)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`Media`](/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`TagStats`](/docs/types/objects/tag-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserTagStatistic`](/docs/types/objects/user-tag-statistic)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
