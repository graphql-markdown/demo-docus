# StudioEdge

> Studio connection edge

Studio connection edge

```graphql
type StudioEdge {
  node: Studio
  id: Int
  isMain: Boolean!
  favouriteOrder: Int
}
```

### Fields

#### [`StudioEdge`.`node`](#)<span className="gqlmd-mdx-bullet">●</span>[`Studio`](/docs/types/objects/studio) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`StudioEdge`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the connection

#### [`StudioEdge`.`isMain`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the studio is the main animation studio of the anime

#### [`StudioEdge`.`favouriteOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The order the character should be displayed from the users favourites

### Member Of

[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StudioConnection`](/docs/types/objects/studio-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
