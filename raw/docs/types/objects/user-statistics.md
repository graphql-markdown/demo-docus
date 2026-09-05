# UserStatistics

> No description

No description

```graphql
type UserStatistics {
  count: Int!
  meanScore: Float!
  standardDeviation: Float!
  minutesWatched: Int!
  episodesWatched: Int!
  chaptersRead: Int!
  volumesRead: Int!
  formats(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserFormatStatistic]
  statuses(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStatusStatistic]
  scores(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserScoreStatistic]
  lengths(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserLengthStatistic]
  releaseYears(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserReleaseYearStatistic]
  startYears(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStartYearStatistic]
  genres(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserGenreStatistic]
  tags(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserTagStatistic]
  countries(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserCountryStatistic]
  voiceActors(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserVoiceActorStatistic]
  staff(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStaffStatistic]
  studios(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStudioStatistic]
}
```

### Fields

#### [`UserStatistics`.`count`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatistics`.`meanScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float!`](/docs/types/scalars/float) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatistics`.`standardDeviation`](#)<span className="gqlmd-mdx-bullet">●</span>[`Float!`](/docs/types/scalars/float) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatistics`.`minutesWatched`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatistics`.`episodesWatched`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatistics`.`chaptersRead`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatistics`.`volumesRead`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`UserStatistics`.`formats`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserFormatStatistic`](/docs/types/objects/user-format-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.formats`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.formats`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`statuses`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatusStatistic`](/docs/types/objects/user-status-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.statuses`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.statuses`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`scores`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserScoreStatistic`](/docs/types/objects/user-score-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.scores`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.scores`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`lengths`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserLengthStatistic`](/docs/types/objects/user-length-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.lengths`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.lengths`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`releaseYears`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserReleaseYearStatistic`](/docs/types/objects/user-release-year-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.releaseYears`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.releaseYears`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`startYears`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStartYearStatistic`](/docs/types/objects/user-start-year-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.startYears`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.startYears`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`genres`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserGenreStatistic`](/docs/types/objects/user-genre-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.genres`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.genres`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`tags`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserTagStatistic`](/docs/types/objects/user-tag-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.tags`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.tags`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`countries`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserCountryStatistic`](/docs/types/objects/user-country-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.countries`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.countries`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`voiceActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserVoiceActorStatistic`](/docs/types/objects/user-voice-actor-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.voiceActors`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.voiceActors`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStaffStatistic`](/docs/types/objects/user-staff-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.staff`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.staff`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`UserStatistics`.`studios`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStudioStatistic`](/docs/types/objects/user-studio-statistic) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`UserStatistics.studios`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`UserStatistics.studios`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticsSort`](/docs/types/enums/user-statistics-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

### Member Of

[`UserStatisticTypes`](/docs/types/objects/user-statistic-types)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
