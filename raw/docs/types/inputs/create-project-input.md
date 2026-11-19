---
title: "CreateProjectInput"
canonical_url: "https://graphql-markdown.dev/docs/types/inputs/create-project-input"
---
# CreateProjectInput

Input used to create a project.

```graphql
input CreateProjectInput {
  name: String!
  ownerId: ID!
  folderId: ID
  status: ProjectStatus
}
```

### Fields

#### [`CreateProjectInput`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name for the new project.

#### [`CreateProjectInput`.`ownerId`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The identifier of the user who will own the project.

#### [`CreateProjectInput`.`folderId`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The optional folder that will contain the project.

#### [`CreateProjectInput`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`ProjectStatus`](https://graphql-markdown.dev/docs/types/enums/project-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The initial lifecycle stage for the project.

### Example

```graphql
{}
```

### Member Of

[`createProject`](https://graphql-markdown.dev/docs/operations/mutations/create-project)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
