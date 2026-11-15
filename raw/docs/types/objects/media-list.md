---
title: "MediaList"
description: "List of anime or manga"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/media-list"
---
# MediaList

> List of anime or manga

List of anime or manga

```graphql
type MediaList {
  id: Int!
  userId: Int!
  mediaId: Int!
  status: MediaListStatus
  score(
    format: ScoreFormat
  ): Float
  progress: Int
  progressVolumes: Int
  repeat: Int
  priority: Int
  private: Boolean
  notes: String
  hiddenFromStatusLists: Boolean
  customLists(
    asArray: Boolean
  ): Json
  advancedScores: Json
  startedAt: FuzzyDate
  completedAt: FuzzyDate
  updatedAt: Int
  createdAt: Int
  media: Media
  user: User
}
```

### Fields

#### [`MediaList`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the list entry

#### [`MediaList`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user owner of the list entry

#### [`MediaList`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media

#### [`MediaList`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](https://graphql-markdown.dev/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The watching/reading status

#### [`MediaList`.`score`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float`](https://graphql-markdown.dev/docs/types/scalars/float) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The score of the entry

##### [`MediaList.score`.`format`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreFormat`](https://graphql-markdown.dev/docs/types/enums/score-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Force the score to be returned in the provided format type.

#### [`MediaList`.`progress`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of episodes/chapters consumed by the user

#### [`MediaList`.`progressVolumes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of volumes read by the user

#### [`MediaList`.`repeat`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of times the user has rewatched/read the media

#### [`MediaList`.`priority`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Priority of planning

#### [`MediaList`.`private`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the entry should only be visible to authenticated user

#### [`MediaList`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Text notes

#### [`MediaList`.`hiddenFromStatusLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the entry shown be hidden from non-custom lists

#### [`MediaList`.`customLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](https://graphql-markdown.dev/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Map of booleans for which custom lists the entry are in

##### [`MediaList.customLists`.`asArray`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Change return structure to an array of objects

#### [`MediaList`.`advancedScores`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](https://graphql-markdown.dev/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Map of advanced scores with name keys

#### [`MediaList`.`startedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDate`](https://graphql-markdown.dev/docs/types/objects/fuzzy-date) <badge color="neutral" size="sm" variant="subtle">object</badge>

When the entry was started by the user

#### [`MediaList`.`completedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDate`](https://graphql-markdown.dev/docs/types/objects/fuzzy-date) <badge color="neutral" size="sm" variant="subtle">object</badge>

When the entry was completed by the user

#### [`MediaList`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the entry data was last updated

#### [`MediaList`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the entry data was created

#### [`MediaList`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](https://graphql-markdown.dev/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaList`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

### Returned By

[`MediaList`](https://graphql-markdown.dev/docs/operations/queries/media-list)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`SaveMediaListEntry`](https://graphql-markdown.dev/docs/operations/mutations/save-media-list-entry)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UpdateMediaListEntries`](https://graphql-markdown.dev/docs/operations/mutations/update-media-list-entries)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>



### Member Of

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Media`](https://graphql-markdown.dev/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaListCollection`](https://graphql-markdown.dev/docs/types/objects/media-list-collection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaListGroup`](https://graphql-markdown.dev/docs/types/objects/media-list-group)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](https://graphql-markdown.dev/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
