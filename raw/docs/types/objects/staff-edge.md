# StaffEdge

> Staff connection edge

Staff connection edge

```graphql
type StaffEdge {
  node: Staff
  id: Int
  role: String
  favouriteOrder: Int
}
```

### Fields

#### [`StaffEdge`.`node`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`StaffEdge`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the connection

#### [`StaffEdge`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The role of the staff member in the production of the media

#### [`StaffEdge`.`favouriteOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The order the staff should be displayed from the users favourites

### Member Of

[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffConnection`](/docs/types/objects/staff-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
