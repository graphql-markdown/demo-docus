---
title: "createProject"
description: "Create a project and assign its initial owner."
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/create-project"
---
# createProject

> Create a project and assign its initial owner.

Create a project and assign its initial owner.

```graphql
createProject(
  input: CreateProjectInput!
): Project!
```

### Arguments

#### [`createProject`.`input`](#)<span className="gqlmd-mdx-bullet">●</span>[`CreateProjectInput!`](https://graphql-markdown.dev/docs/types/inputs/create-project-input) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">input</badge>

The project attributes to create.

### Type

#### [`Project`](https://graphql-markdown.dev/docs/types/objects/project) <badge color="neutral" size="sm" variant="subtle">object</badge>

A unit of work tracked in the workspace.

### Example

```graphql
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    status
    folder {
      id
      name
    }
  }
}
```


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
