---
title: "projects"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/projects"
---
# projects

List projects, optionally filtered by lifecycle status.

```graphql
projects(
  status: ProjectStatus
  limit: Int
): ProjectConnection!
```

### Arguments

#### [`projects`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`ProjectStatus`](https://graphql-markdown.dev/docs/types/enums/project-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Limit results to projects in this lifecycle stage.

#### [`projects`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Maximum number of projects to return. Defaults to 20.

### Type

#### [`ProjectConnection`](https://graphql-markdown.dev/docs/types/objects/project-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

A paginated project result set.

### Example

```graphql
query ListActiveProjects($status: ProjectStatus) {
  projects(status: $status) {
    totalCount
    nodes {
      id
      name
      status
      owner {
        name
      }
    }
  }
}
```


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
