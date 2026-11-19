---
title: "User"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/user"
---
# User

A workspace member who owns and collaborates on projects.

```graphql
type User implements Node {
  id: ID!
  name: String!
  email: String!
  role: String!
}
```

### Fields

#### [`User`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The unique identifier of the user.

#### [`User`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's display name.

#### [`User`.`email`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's primary email address.

#### [`User`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's role in the workspace.

### Interfaces

#### [`Node`](https://graphql-markdown.dev/docs/types/interfaces/node) <badge color="neutral" size="sm" variant="subtle">interface</badge>

A globally unique entity identifier.

### Example

```graphql
{
  "id": "user_01",
  "name": "Avery Chen",
  "email": "avery@example.com",
  "role": "Product Lead"
}
```

### Member Of

[`Project`](https://graphql-markdown.dev/docs/types/objects/project)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ProjectEvent`](https://graphql-markdown.dev/docs/types/objects/project-event)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>



### Implemented By

[`SearchResult`](https://graphql-markdown.dev/docs/types/unions/search-result)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
