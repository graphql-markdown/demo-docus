---
title: "ExternalLinkSourceCollection"
description: "ExternalLinkSource collection query"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/external-link-source-collection"
---
# ExternalLinkSourceCollection

> ExternalLinkSource collection query

ExternalLinkSource collection query

```graphql
ExternalLinkSourceCollection(
  id: Int
  type: ExternalLinkType
  mediaType: ExternalLinkMediaType
): [MediaExternalLink]
```

### Arguments

#### [`ExternalLinkSourceCollection`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the link id

#### [`ExternalLinkSourceCollection`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ExternalLinkType`](https://graphql-markdown.dev/docs/types/enums/external-link-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`ExternalLinkSourceCollection`.`mediaType`](#)<span className="gqlmd-mdx-bullet">●</span>[`ExternalLinkMediaType`](https://graphql-markdown.dev/docs/types/enums/external-link-media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

### Type

#### [`MediaExternalLink`](https://graphql-markdown.dev/docs/types/objects/media-external-link) <badge color="neutral" size="sm" variant="subtle">object</badge>

An external link to another site related to the media or staff member


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
