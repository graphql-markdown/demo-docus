# UpdateMediaListEntries

> Update multiple media list entries to the same values

Update multiple media list entries to the same values

```graphql
UpdateMediaListEntries(
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
  advancedScores: [Float]
  startedAt: FuzzyDateInput
  completedAt: FuzzyDateInput
  ids: [Int]
): [MediaList]
```

### Arguments

#### [`UpdateMediaListEntries`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The watching/reading status

#### [`UpdateMediaListEntries`.`score`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float`](/docs/types/scalars/float) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The score of the media in the user's chosen scoring method (Min: 0, Max: 100)

#### [`UpdateMediaListEntries`.`scoreRaw`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The score of the media in 100 point (Min: 0, Max: 100)

#### [`UpdateMediaListEntries`.`progress`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of episodes/chapters consumed by the user (Min: 0)

#### [`UpdateMediaListEntries`.`progressVolumes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of volumes read by the user (Min: 0)

#### [`UpdateMediaListEntries`.`repeat`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of times the user has rewatched/read the media (Min: 0, Max: 1000)

#### [`UpdateMediaListEntries`.`priority`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Priority of planning (Min: 0, Max: 255)

#### [`UpdateMediaListEntries`.`private`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the entry should only be visible to authenticated user

#### [`UpdateMediaListEntries`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Text notes (Min: 0, Max: 6000)

#### [`UpdateMediaListEntries`.`hiddenFromStatusLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the entry shown be hidden from non-custom lists

#### [`UpdateMediaListEntries`.`advancedScores`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float`](/docs/types/scalars/float) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Array of advanced scores (Min: 0, Max: 100)

#### [`UpdateMediaListEntries`.`startedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInput`](/docs/types/inputs/fuzzy-date-input) <badge color="neutral" size="sm" variant="subtle">input</badge>

When the entry was started by the user

#### [`UpdateMediaListEntries`.`completedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInput`](/docs/types/inputs/fuzzy-date-input) <badge color="neutral" size="sm" variant="subtle">input</badge>

When the entry was completed by the user

#### [`UpdateMediaListEntries`.`ids`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The list entries ids to update

### Type

#### [`MediaList`](/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">object</badge>

List of anime or manga
