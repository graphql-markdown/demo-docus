---
title: "SearchResult"
canonical_url: "https://graphql-markdown.dev/docs/types/unions/search-result"
---
# SearchResult

A result returned from global workspace search.

```graphql
union SearchResult = Folder | Project | User
```

### Possible types

#### [`SearchResult`.`Folder`](https://graphql-markdown.dev/docs/types/objects/folder) <badge color="neutral" size="sm" variant="subtle">object</badge>

A virtual folder used to organize workspace resources.

#### [`SearchResult`.`Project`](https://graphql-markdown.dev/docs/types/objects/project) <badge color="neutral" size="sm" variant="subtle">object</badge>

A unit of work tracked in the workspace.

#### [`SearchResult`.`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

A workspace member who owns and collaborates on projects.

### Returned By

[`search`](https://graphql-markdown.dev/docs/operations/queries/search)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



[View as Markdown](https://graphql-markdown.dev/demo-docus/docs/types/unions/search-result.md)


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
