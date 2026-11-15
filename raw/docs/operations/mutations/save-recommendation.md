---
title: "SaveRecommendation"
description: "Recommendation a media"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/save-recommendation"
---
# SaveRecommendation

> Recommendation a media

Recommendation a media

```graphql
SaveRecommendation(
  mediaId: Int
  mediaRecommendationId: Int
  rating: RecommendationRating
): Recommendation
```

### Arguments

#### [`SaveRecommendation`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the base media

#### [`SaveRecommendation`.`mediaRecommendationId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media to recommend

#### [`SaveRecommendation`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`RecommendationRating`](https://graphql-markdown.dev/docs/types/enums/recommendation-rating) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The rating to give the recommendation

### Type

#### [`Recommendation`](https://graphql-markdown.dev/docs/types/objects/recommendation) <badge color="neutral" size="sm" variant="subtle">object</badge>

Media recommendation


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
