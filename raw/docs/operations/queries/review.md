---
title: "Review"
description: "Review query"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/review"
---
# Review

> Review query

Review query

```graphql
Review(
  id: Int
  mediaId: Int
  userId: Int
  mediaType: MediaType
  sort: [ReviewSort]
): Review
```

### Arguments

#### [`Review`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by Review id

#### [`Review`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media id

#### [`Review`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by user id

#### [`Review`.`mediaType`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](https://graphql-markdown.dev/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by media type

#### [`Review`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewSort`](https://graphql-markdown.dev/docs/types/enums/review-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`Review`](https://graphql-markdown.dev/docs/types/objects/review) <badge color="neutral" size="sm" variant="subtle">object</badge>

A Review that features in an anime or manga


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
