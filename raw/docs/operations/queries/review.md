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

#### [`Review`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by Review id

#### [`Review`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media id

#### [`Review`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by user id

#### [`Review`.`mediaType`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by media type

#### [`Review`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewSort`](/docs/types/enums/review-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`Review`](/docs/types/objects/review) <badge color="neutral" size="sm" variant="subtle">object</badge>

A Review that features in an anime or manga
