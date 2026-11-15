---
title: "DeleteCustomList"
description: "Delete a custom list and remove the list entries from it"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/delete-custom-list"
---
# DeleteCustomList

> Delete a custom list and remove the list entries from it

Delete a custom list and remove the list entries from it

```graphql
DeleteCustomList(
  customList: String
  type: MediaType
): Deleted
```

### Arguments

#### [`DeleteCustomList`.`customList`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name of the custom list to delete

#### [`DeleteCustomList`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](https://graphql-markdown.dev/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The media list type of the custom list

### Type

#### [`Deleted`](https://graphql-markdown.dev/docs/types/objects/deleted) <badge color="neutral" size="sm" variant="subtle">object</badge>

Deleted data type


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
