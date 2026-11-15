---
title: "MediaList"
description: "Media list query"
canonical_url: "https://graphql-markdown.dev/docs/operations/queries/media-list"
---
# MediaList

> Media list query

Media list query

```graphql
MediaList(
  id: Int
  userId: Int
  userName: String
  type: MediaType
  status: MediaListStatus
  mediaId: Int
  isFollowing: Boolean
  notes: String
  startedAt: FuzzyDateInt
  completedAt: FuzzyDateInt
  compareWithAuthList: Boolean
  userId_in: [Int]
  status_in: [MediaListStatus]
  status_not_in: [MediaListStatus]
  status_not: MediaListStatus
  mediaId_in: [Int]
  mediaId_not_in: [Int]
  notes_like: String
  startedAt_greater: FuzzyDateInt
  startedAt_lesser: FuzzyDateInt
  startedAt_like: String
  completedAt_greater: FuzzyDateInt
  completedAt_lesser: FuzzyDateInt
  completedAt_like: String
  sort: [MediaListSort]
): MediaList
```

### Arguments

#### [`MediaList`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a list entry's id

#### [`MediaList`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's id

#### [`MediaList`.`userName`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's name

#### [`MediaList`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](https://graphql-markdown.dev/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the list entries media type

#### [`MediaList`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](https://graphql-markdown.dev/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

#### [`MediaList`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry

#### [`MediaList`.`isFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter list entries to users who are being followed by the authenticated user

#### [`MediaList`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

#### [`MediaList`.`startedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](https://graphql-markdown.dev/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaList`.`completedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](https://graphql-markdown.dev/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaList`.`compareWithAuthList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Limit to only entries also on the auth user's list. Requires user id or name arguments.

#### [`MediaList`.`userId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's id (max 10,000 items)

#### [`MediaList`.`status_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](https://graphql-markdown.dev/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

#### [`MediaList`.`status_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](https://graphql-markdown.dev/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

#### [`MediaList`.`status_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](https://graphql-markdown.dev/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

#### [`MediaList`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry (max 10,000 items)

#### [`MediaList`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry (max 10,000 items)

#### [`MediaList`.`notes_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

#### [`MediaList`.`startedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](https://graphql-markdown.dev/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaList`.`startedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](https://graphql-markdown.dev/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaList`.`startedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

#### [`MediaList`.`completedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](https://graphql-markdown.dev/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaList`.`completedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](https://graphql-markdown.dev/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaList`.`completedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

#### [`MediaList`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListSort`](https://graphql-markdown.dev/docs/types/enums/media-list-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`MediaList`](https://graphql-markdown.dev/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">object</badge>

List of anime or manga


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
