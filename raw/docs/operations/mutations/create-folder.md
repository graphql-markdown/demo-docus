---
title: "createFolder"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/create-folder"
---
# createFolder

Create a virtual folder in the workspace.

```graphql
createFolder(
  name: String!
  parentId: ID
): Folder!
```

### Arguments

#### [`createFolder`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name of the new folder.

#### [`createFolder`.`parentId`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The optional parent folder identifier.

### Type

#### [`Folder`](https://graphql-markdown.dev/docs/types/objects/folder) <badge color="neutral" size="sm" variant="subtle">object</badge>

A virtual folder used to organize workspace resources.

### Example

```graphql
mutation CreateFolder($name: String!, $parentId: ID) {
  createFolder(name: $name, parentId: $parentId) {
    id
    name
  }
}
```


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
