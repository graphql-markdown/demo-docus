---
title: "projectChanged"
canonical_url: "https://graphql-markdown.dev/docs/operations/subscriptions/project-changed"
---
# projectChanged

Receive an event whenever a project changes in the workspace.

```graphql
projectChanged(
  projectId: ID
  types: [ProjectEventType!]
): ProjectEvent!
```

### Arguments

#### `projectChanged`.`projectId`<span className="gqlmd-mdx-bullet">●</span>[`ID`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Limit events to a single project.

#### `projectChanged`.`types`<span className="gqlmd-mdx-bullet">●</span>[`[ProjectEventType!]`](https://graphql-markdown.dev/docs/types/enums/project-event-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Limit events to these change kinds.

### Type

#### [`ProjectEvent`](https://graphql-markdown.dev/docs/types/objects/project-event) <badge color="neutral" size="sm" variant="subtle">object</badge>

A change delivered to subscribers watching a project.

### Example

```graphql
subscription WatchProject($projectId: ID, $types: [ProjectEventType!]) {
  projectChanged(projectId: $projectId, types: $types) {
    type
    occurredAt
    project {
      id
      name
      status
    }
    actor {
      name
    }
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docus/docs/operations/subscriptions/project-changed.md)


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
