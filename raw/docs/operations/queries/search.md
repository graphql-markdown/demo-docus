---
title: "search"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/search"
---
# search

Search folders, projects, and users from a single endpoint.

```graphql
search(
  query: String!
): [SearchResult!]!
```

### Arguments

#### `search`.`query`<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Text matched against folder, project, and user names.

### Type

#### [`SearchResult`](https://graphql-markdown.dev/docs/types/unions/search-result) <badge color="neutral" size="sm" variant="subtle">union</badge>

A result returned from global workspace search.

### Example

```graphql
query SearchWorkspace($query: String!) {
  search(query: $query) {
    __typename
    ... on Folder {
      id
      name
    }
    ... on Project {
      id
      name
      status
    }
    ... on User {
      id
      name
      email
    }
  }
}
```


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
