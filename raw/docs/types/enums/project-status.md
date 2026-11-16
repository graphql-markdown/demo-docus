---
title: "ProjectStatus"
description: "The lifecycle stage of a project."
canonical_url: "https://graphql-markdown.dev/docs/types/enums/project-status"
---
# ProjectStatus

> The lifecycle stage of a project.

The lifecycle stage of a project.

```graphql
enum ProjectStatus {
  DRAFT
  ACTIVE
  ARCHIVED
}
```

### Values

#### [`ProjectStatus`.`DRAFT`](#)

The project is being planned and is not yet active.

#### [`ProjectStatus`.`ACTIVE`](#)

The project is active and available to collaborators.

#### [`ProjectStatus`.`ARCHIVED`](#)

The project is retained for history and no longer active.

### Member Of

[`CreateProjectInput`](https://graphql-markdown.dev/docs/types/inputs/create-project-input)  <badge color="neutral" size="sm" variant="subtle">

input

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

[`projects`](https://graphql-markdown.dev/docs/operations/queries/projects)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
