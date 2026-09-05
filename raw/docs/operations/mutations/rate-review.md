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

#### [`RateReview`.`reviewId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the review to rate

#### [`RateReview`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewRating`](/docs/types/enums/review-rating) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The rating to apply to the review

### Type

#### [`Review`](/docs/types/objects/review) <badge color="neutral" size="sm" variant="subtle">object</badge>

A Review that features in an anime or manga
