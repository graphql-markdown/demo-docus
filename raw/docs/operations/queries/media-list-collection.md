# MediaListCollection

> Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required.

Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required.

```graphql
MediaListCollection(
  userId: Int
  userName: String
  type: MediaType
  status: MediaListStatus
  notes: String
  startedAt: FuzzyDateInt
  completedAt: FuzzyDateInt
  forceSingleCompletedList: Boolean
  chunk: Int
  perChunk: Int
  status_in: [MediaListStatus]
  status_not_in: [MediaListStatus]
  status_not: MediaListStatus
  notes_like: String
  startedAt_greater: FuzzyDateInt
  startedAt_lesser: FuzzyDateInt
  startedAt_like: String
  completedAt_greater: FuzzyDateInt
  completedAt_lesser: FuzzyDateInt
  completedAt_like: String
  sort: [MediaListSort]
): MediaListCollection
```

### Arguments

#### [`MediaListCollection`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's id

#### [`MediaListCollection`.`userName`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's name

#### [`MediaListCollection`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the list entries media type

#### [`MediaListCollection`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

#### [`MediaListCollection`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

#### [`MediaListCollection`.`startedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaListCollection`.`completedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaListCollection`.`forceSingleCompletedList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Always return completed list entries in one group, overriding the user's split completed option.

#### [`MediaListCollection`.`chunk`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Which chunk of list entries to load

#### [`MediaListCollection`.`perChunk`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per chunk, max 500

#### [`MediaListCollection`.`status_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

#### [`MediaListCollection`.`status_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

#### [`MediaListCollection`.`status_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

#### [`MediaListCollection`.`notes_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

#### [`MediaListCollection`.`startedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaListCollection`.`startedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaListCollection`.`startedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaListCollection`.`completedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaListCollection`.`completedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaListCollection`.`completedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaListCollection`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListSort`](/docs/types/enums/media-list-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`MediaListCollection`](/docs/types/objects/media-list-collection) <badge color="neutral" size="sm" variant="subtle">object</badge>

List of anime or manga
