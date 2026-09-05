# SaveMediaListEntry

> Create or update a media list entry

Create or update a media list entry

```graphql
SaveMediaListEntry(
  id: Int
  mediaId: Int
  status: MediaListStatus
  score: Float
  scoreRaw: Int
  progress: Int
  progressVolumes: Int
  repeat: Int
  priority: Int
  private: Boolean
  notes: String
  hiddenFromStatusLists: Boolean
  customLists: [String]
  advancedScores: [Float]
  startedAt: FuzzyDateInput
  completedAt: FuzzyDateInput
): MediaList
```

### Arguments

#### [`SaveMediaListEntry`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The list entry id, required for updating

#### [`SaveMediaListEntry`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media the entry is of

#### [`SaveMediaListEntry`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The watching/reading status

#### [`SaveMediaListEntry`.`score`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float`](/docs/types/scalars/float) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The score of the media in the user's chosen scoring method (Min: 0, Max: 100)

#### [`SaveMediaListEntry`.`scoreRaw`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The score of the media in 100 point (Min: 0, Max: 100)

#### [`SaveMediaListEntry`.`progress`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of episodes/chapters consumed by the user (Min: 0)

#### [`SaveMediaListEntry`.`progressVolumes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of volumes read by the user (Min: 0)

#### [`SaveMediaListEntry`.`repeat`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of times the user has rewatched/read the media (Min: 0, Max: 1000)

#### [`SaveMediaListEntry`.`priority`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Priority of planning (Min: 0, Max: 255)

#### [`SaveMediaListEntry`.`private`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the entry should only be visible to authenticated user

#### [`SaveMediaListEntry`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Text notes (Min: 0, Max: 6000)

#### [`SaveMediaListEntry`.`hiddenFromStatusLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the entry shown be hidden from non-custom lists

#### [`SaveMediaListEntry`.`customLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Array of custom list names which should be enabled for this entry

#### [`SaveMediaListEntry`.`advancedScores`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float`](/docs/types/scalars/float) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Array of advanced scores (Min: 0, Max: 100)

#### [`SaveMediaListEntry`.`startedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInput`](/docs/types/inputs/fuzzy-date-input) <badge color="neutral" size="sm" variant="subtle">input</badge>

When the entry was started by the user

#### [`SaveMediaListEntry`.`completedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInput`](/docs/types/inputs/fuzzy-date-input) <badge color="neutral" size="sm" variant="subtle">input</badge>

When the entry was completed by the user

### Type

#### [`MediaList`](/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">object</badge>

List of anime or manga
