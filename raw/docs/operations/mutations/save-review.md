# SaveReview

> Create or update a review

Create or update a review

```graphql
SaveReview(
  id: Int
  mediaId: Int
  body: String
  summary: String
  score: Int
  private: Boolean
): Review
```

### Arguments

#### [`SaveReview`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The review id, required for updating

#### [`SaveReview`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media the review is of

#### [`SaveReview`.`body`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The main review text (Min: 2600)

#### [`SaveReview`.`summary`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A short summary/preview of the review (Min: 20, Max: 120)

#### [`SaveReview`.`score`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The score of the review (Min: 0, Max: 100)

#### [`SaveReview`.`private`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the review should only be visible to its creator

### Type

#### [`Review`](/docs/types/objects/review) <badge color="neutral" size="sm" variant="subtle">object</badge>

A Review that features in an anime or manga
