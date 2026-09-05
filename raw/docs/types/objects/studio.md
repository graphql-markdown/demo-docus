# Studio

> Animation or production company

Animation or production company

```graphql
type Studio {
  id: Int!
  name: String!
  isAnimationStudio: Boolean!
  media(
    sort: [MediaSort]
    isMain: Boolean
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  siteUrl: String
  isFavourite: Boolean!
  favourites: Int
}
```

### Fields

#### [`Studio`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the studio

#### [`Studio`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name of the studio

#### [`Studio`.`isAnimationStudio`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the studio is an animation studio or a different kind of company

#### [`Studio`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaConnection`](/docs/types/objects/media-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media the studio has worked on

##### [`Studio.media`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSort`](/docs/types/enums/media-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

##### [`Studio.media`.`isMain`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the studio was the primary animation studio of the media

##### [`Studio.media`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`Studio.media`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Studio.media`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Studio`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the studio page on the AniList website

#### [`Studio`.`isFavourite`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the studio is marked as favourite by the currently authenticated user

#### [`Studio`.`favourites`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of user's who have favourited the studio

### Returned By

[`Studio`](/docs/operations/queries/studio)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmissionEdge`](/docs/types/objects/media-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

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

[`RevisionHistory`](/docs/types/objects/revision-history)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StudioConnection`](/docs/types/objects/studio-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StudioEdge`](/docs/types/objects/studio-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StudioStats`](/docs/types/objects/studio-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserStudioStatistic`](/docs/types/objects/user-studio-statistic)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
