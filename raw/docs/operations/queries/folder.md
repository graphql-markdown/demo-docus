---
title: "folder"
description: "Fetch a single folder by its unique identifier."
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/folder"
---
# folder

> Fetch a single folder by its unique identifier.

Fetch a single folder by its unique identifier.

```graphql
folder(
  id: ID!
): Folder
```

### Arguments

#### [`folder`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The unique identifier of the folder to retrieve.

### Type

#### [`Folder`](https://graphql-markdown.dev/docs/types/objects/folder) <badge color="neutral" size="sm" variant="subtle">object</badge>

A virtual folder used to organize workspace resources.

### Example

```graphql
query GetFolder($id: ID!) {
  folder(id: $id) {
    id
    name
    parent
    createdAt
  }
}
```


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
