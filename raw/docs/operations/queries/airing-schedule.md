# AiringSchedule

> Airing schedule query

Airing schedule query

```graphql
AiringSchedule(
  id: Int
  mediaId: Int
  episode: Int
  airingAt: Int
  notYetAired: Boolean
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  mediaId_not: Int
  mediaId_in: [Int]
  mediaId_not_in: [Int]
  episode_not: Int
  episode_in: [Int]
  episode_not_in: [Int]
  episode_greater: Int
  episode_lesser: Int
  airingAt_greater: Int
  airingAt_lesser: Int
  sort: [AiringSort]
): AiringSchedule
```

### Arguments

#### [`AiringSchedule`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item

#### [`AiringSchedule`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media

#### [`AiringSchedule`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

#### [`AiringSchedule`.`airingAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

#### [`AiringSchedule`.`notYetAired`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to episodes that haven't yet aired

#### [`AiringSchedule`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item

#### [`AiringSchedule`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item (max 10,000 items)

#### [`AiringSchedule`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item (max 10,000 items)

#### [`AiringSchedule`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media

#### [`AiringSchedule`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media (max 10,000 items)

#### [`AiringSchedule`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media (max 10,000 items)

#### [`AiringSchedule`.`episode_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

#### [`AiringSchedule`.`episode_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number (max 10,000 items)

#### [`AiringSchedule`.`episode_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number (max 10,000 items)

#### [`AiringSchedule`.`episode_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

#### [`AiringSchedule`.`episode_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

#### [`AiringSchedule`.`airingAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

#### [`AiringSchedule`.`airingAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

#### [`AiringSchedule`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringSort`](/docs/types/enums/airing-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`AiringSchedule`](/docs/types/objects/airing-schedule) <badge color="neutral" size="sm" variant="subtle">object</badge>

Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
