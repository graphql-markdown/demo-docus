---
title: "archiveProject"
description: "Archive a project that is no longer active."
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/archive-project"
---
# archiveProject

> Archive a project that is no longer active.

Archive a project that is no longer active.

```graphql
archiveProject(
  id: ID!
): Project!
```

### Arguments

#### [`archiveProject`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The unique identifier of the project to archive.

### Type

#### [`Project`](https://graphql-markdown.dev/docs/types/objects/project) <badge color="neutral" size="sm" variant="subtle">object</badge>

A unit of work tracked in the workspace.

### Example

```graphql
mutation ArchiveProject($id: ID!) {
  archiveProject(id: $id) {
    id
    name
    status
    updatedAt
  }
}
```


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
