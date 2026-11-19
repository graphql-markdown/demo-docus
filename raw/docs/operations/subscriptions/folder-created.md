---
title: "folderCreated"
canonical_url: "https://graphql-markdown.dev/docs/operations/subscriptions/folder-created"
---
# folderCreated

Receive folders as they are created in the workspace.

```graphql
folderCreated(
  parentId: ID
): Folder!
```

### Arguments

#### [`folderCreated`.`parentId`](#)<span className="gqlmd-mdx-bullet">●</span>[`ID`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Limit events to folders created under this parent.

### Type

#### [`Folder`](https://graphql-markdown.dev/docs/types/objects/folder) <badge color="neutral" size="sm" variant="subtle">object</badge>

A virtual folder used to organize workspace resources.

### Example

```graphql
subscription WatchFolders($parentId: ID) {
  folderCreated(parentId: $parentId) {
    id
    name
    parent
    createdAt
  }
}
```


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
