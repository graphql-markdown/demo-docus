---
title: "ProjectEvent"
description: "A change delivered to subscribers watching a project."
canonical_url: "https://graphql-markdown.dev/docs/types/objects/project-event"
---
# ProjectEvent

> A change delivered to subscribers watching a project.

A change delivered to subscribers watching a project.

```graphql
type ProjectEvent {
  type: ProjectEventType!
  project: Project!
  actor: User
  occurredAt: DateTime!
}
```

### Fields

#### [`ProjectEvent`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ProjectEventType!`](https://graphql-markdown.dev/docs/types/enums/project-event-type) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The kind of change that occurred.

#### [`ProjectEvent`.`project`](#)<span className="gqlmd-mdx-bullet">●</span>[`Project!`](https://graphql-markdown.dev/docs/types/objects/project) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The project in its state after the change.

#### [`ProjectEvent`.`actor`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who triggered the change, when known.

#### [`ProjectEvent`.`occurredAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`DateTime!`](https://graphql-markdown.dev/docs/types/scalars/date-time) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the change occurred.

### Example

```graphql
{
  "type": "UPDATED",
  "project": {
    "id": "project_01",
    "name": "Mobile Refresh",
    "status": "ACTIVE"
  },
  "occurredAt": "2026-09-05T10:15:00Z"
}
```

### Returned By

[`projectChanged`](https://graphql-markdown.dev/docs/operations/subscriptions/project-changed)  <badge color="neutral" size="sm" variant="subtle">

subscription

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
