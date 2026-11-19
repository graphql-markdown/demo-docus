---
title: "Node"
canonical_url: "https://graphql-markdown.dev/docs/types/interfaces/node"
---
# Node

A globally unique entity identifier.

```graphql
interface Node {
  id: ID!
}
```

### Fields

#### [`Node`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The globally unique identifier for this resource.

### Example

```graphql
{}
```

### Implemented By

[`Folder`](https://graphql-markdown.dev/docs/types/objects/folder)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Project`](https://graphql-markdown.dev/docs/types/objects/project)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`User`](https://graphql-markdown.dev/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
