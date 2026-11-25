---
title: "Folder"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/folder"
---
# Folder

A virtual folder used to organize workspace resources.

```graphql
type Folder implements Node {
  id: ID!
  name: String!
  parent: String
  createdAt: DateTime!
}
```

### Fields

#### `Folder`.`id`<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The unique identifier of the folder.

#### `Folder`.`name`<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The human-readable folder name.

#### `Folder`.`parent`<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The identifier of the parent folder, when nested.

#### `Folder`.`createdAt`<span className="gqlmd-mdx-bullet">●</span>[`DateTime!`](https://graphql-markdown.dev/docs/types/scalars/date-time) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the folder was created.

### Interfaces

#### [`Node`](https://graphql-markdown.dev/docs/types/interfaces/node) <badge color="neutral" size="sm" variant="subtle">interface</badge>

A globally unique entity identifier.

### Example

```graphql
{
  "id": "folder_01",
  "name": "Product Planning",
  "parent": "folder_root",
  "createdAt": "2026-09-05T09:30:00Z"
}
```

### Returned By

[`createFolder`](https://graphql-markdown.dev/docs/operations/mutations/create-folder)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`folder`](https://graphql-markdown.dev/docs/operations/queries/folder)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`folderCreated`](https://graphql-markdown.dev/docs/operations/subscriptions/folder-created)  <badge color="neutral" size="sm" variant="subtle">

subscription

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`folders`](https://graphql-markdown.dev/docs/operations/queries/folders)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`Project`](https://graphql-markdown.dev/docs/types/objects/project)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>



### Implemented By

[`SearchResult`](https://graphql-markdown.dev/docs/types/unions/search-result)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>



[View as Markdown](https://graphql-markdown.dev/demo-docus/docs/types/objects/folder.md)


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
