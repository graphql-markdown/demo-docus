---
title: "StaffEdge"
description: "Staff connection edge"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/staff-edge"
---
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

#### [`StaffEdge`.`node`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](https://graphql-markdown.dev/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`StaffEdge`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the connection

#### [`StaffEdge`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The role of the staff member in the production of the media

#### [`StaffEdge`.`favouriteOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The order the staff should be displayed from the users favourites

### Member Of

[`MediaSubmissionComparison`](https://graphql-markdown.dev/docs/types/objects/media-submission-comparison)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffConnection`](https://graphql-markdown.dev/docs/types/objects/staff-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
