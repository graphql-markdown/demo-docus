---
title: "Project"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/project"
---
# Project

A unit of work tracked in the workspace.

```graphql
type Project implements Node {
  id: ID!
  name: String!
  status: ProjectStatus!
  owner: User!
  folder: Folder
  updatedAt: DateTime!
  state: String @deprecated
}
```

### Fields

#### [`Project`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The unique identifier of the project.

#### [`Project`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The project name shown to collaborators.

#### [`Project`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`ProjectStatus!`](https://graphql-markdown.dev/docs/types/enums/project-status) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The current lifecycle stage of the project.

#### [`Project`.`owner`](#)<span className="gqlmd-mdx-bullet">●</span>[`User!`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The user responsible for the project.

#### [`Project`.`folder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Folder`](https://graphql-markdown.dev/docs/types/objects/folder) <badge color="neutral" size="sm" variant="subtle">object</badge>

The folder containing this project, when assigned.

#### [`Project`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`DateTime!`](https://graphql-markdown.dev/docs/types/scalars/date-time) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the project was last updated.

#### [`Project`.`state`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Replaced by the `ProjectStatus` enum on status.

</accordion-item>
</accordion>

The project's lifecycle stage.

### Interfaces

#### [`Node`](https://graphql-markdown.dev/docs/types/interfaces/node) <badge color="neutral" size="sm" variant="subtle">interface</badge>

A globally unique entity identifier.

### Example

```graphql
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
```

### Returned By

[`archiveProject`](https://graphql-markdown.dev/docs/operations/mutations/archive-project)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`createProject`](https://graphql-markdown.dev/docs/operations/mutations/create-project)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>



### Member Of

[`ProjectConnection`](https://graphql-markdown.dev/docs/types/objects/project-connection)  <badge color="neutral" size="sm" variant="subtle">

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
