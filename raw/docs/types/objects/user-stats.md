# UserStats

> A user's statistics

A user's statistics

```graphql
type UserStats {
  watchedTime: Int
  chaptersRead: Int
  activityHistory: [UserActivityHistory]
  animeStatusDistribution: [StatusDistribution]
  mangaStatusDistribution: [StatusDistribution]
  animeScoreDistribution: [ScoreDistribution]
  mangaScoreDistribution: [ScoreDistribution]
  animeListScores: ListScoreStats
  mangaListScores: ListScoreStats
  favouredGenresOverview: [GenreStats]
  favouredGenres: [GenreStats]
  favouredTags: [TagStats]
  favouredActors: [StaffStats]
  favouredStaff: [StaffStats]
  favouredStudios: [StudioStats]
  favouredYears: [YearStats]
  favouredFormats: [FormatStats]
}
```

### Fields

#### [`UserStats`.`watchedTime`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of anime the user has watched in minutes

#### [`UserStats`.`chaptersRead`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of manga chapters the user has read

#### [`UserStats`.`activityHistory`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserActivityHistory`](/docs/types/objects/user-activity-history) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`animeStatusDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`StatusDistribution`](/docs/types/objects/status-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`mangaStatusDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`StatusDistribution`](/docs/types/objects/status-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`animeScoreDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreDistribution`](/docs/types/objects/score-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`mangaScoreDistribution`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreDistribution`](/docs/types/objects/score-distribution) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`animeListScores`](#)<span className="gqlmd-mdx-bullet">●</span>[`ListScoreStats`](/docs/types/objects/list-score-stats) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`mangaListScores`](#)<span className="gqlmd-mdx-bullet">●</span>[`ListScoreStats`](/docs/types/objects/list-score-stats) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredGenresOverview`](#)<span className="gqlmd-mdx-bullet">●</span>[`GenreStats`](/docs/types/objects/genre-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredGenres`](#)<span className="gqlmd-mdx-bullet">●</span>[`GenreStats`](/docs/types/objects/genre-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredTags`](#)<span className="gqlmd-mdx-bullet">●</span>[`TagStats`](/docs/types/objects/tag-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffStats`](/docs/types/objects/staff-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredStaff`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffStats`](/docs/types/objects/staff-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredStudios`](#)<span className="gqlmd-mdx-bullet">●</span>[`StudioStats`](/docs/types/objects/studio-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredYears`](#)<span className="gqlmd-mdx-bullet">●</span>[`YearStats`](/docs/types/objects/year-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`UserStats`.`favouredFormats`](#)<span className="gqlmd-mdx-bullet">●</span>[`FormatStats`](/docs/types/objects/format-stats) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

### Member Of

[`User`](/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
