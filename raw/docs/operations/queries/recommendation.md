# Recommendation

> Recommendation query

Recommendation query

```graphql
Recommendation(
  id: Int
  mediaId: Int
  mediaRecommendationId: Int
  userId: Int
  rating: Int
  onList: Boolean
  rating_greater: Int
  rating_lesser: Int
  sort: [RecommendationSort]
): Recommendation
```

### Arguments

#### [`Recommendation`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by recommendation id

#### [`Recommendation`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media id

#### [`Recommendation`.`mediaRecommendationId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media recommendation id

#### [`Recommendation`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by user who created the recommendation

#### [`Recommendation`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

#### [`Recommendation`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media on the authenticated user's lists

#### [`Recommendation`.`rating_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

#### [`Recommendation`.`rating_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

#### [`Recommendation`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`RecommendationSort`](/docs/types/enums/recommendation-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`Recommendation`](/docs/types/objects/recommendation) <badge color="neutral" size="sm" variant="subtle">object</badge>

Media recommendation
