---
title: "folders"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/folders"
---
# folders

List folders available in the current workspace.

```graphql
folders(
  limit: Int
  offset: Int
): [Folder!]!
```

### Arguments

#### `folders`.`limit`<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Maximum number of folders to return.

#### `folders`.`offset`<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Number of folders to skip before returning results.

### Type

#### [`Folder`](https://graphql-markdown.dev/docs/types/objects/folder) <badge color="neutral" size="sm" variant="subtle">object</badge>

A virtual folder used to organize workspace resources.

### Example

```graphql
query ListFolders {
  folders {
    id
    name
    parent
    createdAt
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-docus/docs/operations/queries/folders.md)


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
