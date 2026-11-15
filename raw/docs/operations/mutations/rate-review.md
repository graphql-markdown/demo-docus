---
title: "RateReview"
description: "Rate a review"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/rate-review"
---
# RateReview

> Rate a review

Rate a review

```graphql
RateReview(
  reviewId: Int
  rating: ReviewRating
): Review
```

### Arguments

#### [`RateReview`.`reviewId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the review to rate

#### [`RateReview`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewRating`](https://graphql-markdown.dev/docs/types/enums/review-rating) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The rating to apply to the review

### Type

#### [`Review`](https://graphql-markdown.dev/docs/types/objects/review) <badge color="neutral" size="sm" variant="subtle">object</badge>

A Review that features in an anime or manga


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
