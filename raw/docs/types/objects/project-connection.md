---
title: "ProjectConnection"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/project-connection"
---
# ProjectConnection

A paginated project result set.

```graphql
type ProjectConnection {
  nodes: [Project!]!
  totalCount: Int!
}
```

### Fields

#### [`ProjectConnection`.`nodes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Project!!`](https://graphql-markdown.dev/docs/types/objects/project) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

Projects in the current result page.

#### [`ProjectConnection`.`totalCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The total number of projects matching the query.

### Example

```graphql
{
  "nodes": [
    {
      "id": "project_01",
      "name": "Mobile Refresh",
      "status": "ACTIVE",
      "owner": {
        "id": "user_01",
        "name": "Avery Chen"
      },
      "updatedAt": "2026-09-05T10:15:00Z"
    }
  ]
}
```

### Returned By

[`projects`](https://graphql-markdown.dev/docs/operations/queries/projects)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
