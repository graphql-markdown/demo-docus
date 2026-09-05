# Recommendation

> Media recommendation

Media recommendation

```graphql
type Recommendation {
  id: Int!
  rating: Int
  userRating: RecommendationRating
  media: Media
  mediaRecommendation: Media
  user: User
}
```

### Fields

#### [`Recommendation`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the recommendation

#### [`Recommendation`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Users rating of the recommendation

#### [`Recommendation`.`userRating`](#)<span className="gqlmd-mdx-bullet">●</span>[`RecommendationRating`](/docs/types/enums/recommendation-rating) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The rating of the recommendation by currently authenticated user

#### [`Recommendation`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media the recommendation is from

#### [`Recommendation`.`mediaRecommendation`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The recommended media

#### [`Recommendation`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user that first created the recommendation

### Returned By

[`Recommendation`](/docs/operations/queries/recommendation)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`SaveRecommendation`](/docs/operations/mutations/save-recommendation)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>



### Member Of

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RecommendationConnection`](/docs/types/objects/recommendation-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RecommendationEdge`](/docs/types/objects/recommendation-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
