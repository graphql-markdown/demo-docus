---
title: "Review"
description: "A Review that features in an anime or manga"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/review"
---
# Review

> A Review that features in an anime or manga

A Review that features in an anime or manga

```graphql
type Review {
  id: Int!
  userId: Int!
  mediaId: Int!
  mediaType: MediaType
  summary: String
  body(
    asHtml: Boolean
  ): String
  rating: Int
  ratingAmount: Int
  userRating: ReviewRating
  score: Int
  private: Boolean
  siteUrl: String
  createdAt: Int!
  updatedAt: Int!
  user: User
  media: Media
}
```

### Fields

#### [`Review`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the review

#### [`Review`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the review's creator

#### [`Review`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the review's media

#### [`Review`.`mediaType`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](https://graphql-markdown.dev/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

For which type of media the review is for

#### [`Review`.`summary`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A short summary of the review

#### [`Review`.`body`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The main review body text

##### [`Review.body`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`Review`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The total user rating of the review

#### [`Review`.`ratingAmount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of user ratings of the review

#### [`Review`.`userRating`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewRating`](https://graphql-markdown.dev/docs/types/enums/review-rating) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The rating of the review by currently authenticated user

#### [`Review`.`score`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The review score of the media

#### [`Review`.`private`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the review is not yet publicly published and is only viewable by creator

#### [`Review`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the review page on the AniList website

#### [`Review`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time of the thread creation

#### [`Review`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time of the thread last update

#### [`Review`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The creator of the review

#### [`Review`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](https://graphql-markdown.dev/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media the review is of

### Returned By

[`RateReview`](https://graphql-markdown.dev/docs/operations/mutations/rate-review)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Review`](https://graphql-markdown.dev/docs/operations/queries/review)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`SaveReview`](https://graphql-markdown.dev/docs/operations/mutations/save-review)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>



### Member Of

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](https://graphql-markdown.dev/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ReviewConnection`](https://graphql-markdown.dev/docs/types/objects/review-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ReviewEdge`](https://graphql-markdown.dev/docs/types/objects/review-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
