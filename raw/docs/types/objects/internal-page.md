# InternalPage

> Page of data. Limited to a max depth of 5000 entries. This is calculated as the page parameter multiplied by the perPage parameter.

Page of data. Limited to a max depth of 5000 entries. This is calculated as the page parameter multiplied by the perPage parameter.

```graphql
type InternalPage {
  mediaSubmissions(
    mediaId: Int
    submissionId: Int
    userId: Int
    assigneeId: Int
    status: SubmissionStatus
    type: MediaType
    sort: [SubmissionSort]
  ): [MediaSubmission]
  characterSubmissions(
    characterId: Int
    userId: Int
    assigneeId: Int
    status: SubmissionStatus
    sort: [SubmissionSort]
  ): [CharacterSubmission]
  staffSubmissions(
    staffId: Int
    userId: Int
    assigneeId: Int
    status: SubmissionStatus
    sort: [SubmissionSort]
  ): [StaffSubmission]
  revisionHistory(
    userId: Int
    mediaId: Int
    characterId: Int
    staffId: Int
    studioId: Int
  ): [RevisionHistory]
  reports(
    reporterId: Int
    reportedId: Int
  ): [Report]
  modActions(
    userId: Int
    modId: Int
    modId_not: Int
    modId_in: [Int]
    modId_not_in: [Int]
  ): [ModAction]
  userBlockSearch(
    search: String
  ): [User]
  pageInfo: PageInfo
  users(
    id: Int
    name: String
    isModerator: Boolean
    search: String
    sort: [UserSort]
  ): [User]
  media(
    id: Int
    idMal: Int
    startDate: FuzzyDateInt
    endDate: FuzzyDateInt
    season: MediaSeason
    seasonYear: Int
    type: MediaType
    format: MediaFormat
    status: MediaStatus
    episodes: Int
    duration: Int
    chapters: Int
    volumes: Int
    isAdult: Boolean
    genre: String
    tag: String
    minimumTagRank: Int
    tagCategory: String
    onList: Boolean
    licensedBy: String
    licensedById: Int
    averageScore: Int
    popularity: Int
    source: MediaSource
    countryOfOrigin: CountryCode
    isLicensed: Boolean
    search: String
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    idMal_not: Int
    idMal_in: [Int]
    idMal_not_in: [Int]
    startDate_greater: FuzzyDateInt
    startDate_lesser: FuzzyDateInt
    startDate_like: String
    endDate_greater: FuzzyDateInt
    endDate_lesser: FuzzyDateInt
    endDate_like: String
    format_in: [MediaFormat]
    format_not: MediaFormat
    format_not_in: [MediaFormat]
    status_in: [MediaStatus]
    status_not: MediaStatus
    status_not_in: [MediaStatus]
    episodes_greater: Int
    episodes_lesser: Int
    duration_greater: Int
    duration_lesser: Int
    chapters_greater: Int
    chapters_lesser: Int
    volumes_greater: Int
    volumes_lesser: Int
    genre_in: [String]
    genre_not_in: [String]
    tag_in: [String]
    tag_not_in: [String]
    tagCategory_in: [String]
    tagCategory_not_in: [String]
    licensedBy_in: [String]
    licensedById_in: [Int]
    averageScore_not: Int
    averageScore_greater: Int
    averageScore_lesser: Int
    popularity_not: Int
    popularity_greater: Int
    popularity_lesser: Int
    source_in: [MediaSource]
    countryOfOrigin_in: [CountryCode]
    countryOfOrigin_not_in: [CountryCode]
    sort: [MediaSort]
  ): [Media]
  characters(
    id: Int
    isBirthday: Boolean
    search: String
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    sort: [CharacterSort]
  ): [Character]
  staff(
    id: Int
    isBirthday: Boolean
    search: String
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    sort: [StaffSort]
  ): [Staff]
  studios(
    id: Int
    search: String
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    sort: [StudioSort]
  ): [Studio]
  mediaList(
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
  ): [MediaList]
  airingSchedules(
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
  ): [AiringSchedule]
  mediaTrends(
    mediaId: Int
    date: Int
    trending: Int
    averageScore: Int
    popularity: Int
    episode: Int
    releasing: Boolean
    mediaId_not: Int
    mediaId_in: [Int]
    mediaId_not_in: [Int]
    date_greater: Int
    date_lesser: Int
    trending_greater: Int
    trending_lesser: Int
    trending_not: Int
    averageScore_greater: Int
    averageScore_lesser: Int
    averageScore_not: Int
    popularity_greater: Int
    popularity_lesser: Int
    popularity_not: Int
    episode_greater: Int
    episode_lesser: Int
    episode_not: Int
    sort: [MediaTrendSort]
  ): [MediaTrend]
  notifications(
    type: NotificationType
    resetNotificationCount: Boolean
    type_in: [NotificationType]
  ): [NotificationUnion]
  followers(
    userId: Int!
    sort: [UserSort]
  ): [User]
  following(
    userId: Int!
    sort: [UserSort]
  ): [User]
  activities(
    id: Int
    userId: Int
    messengerId: Int
    mediaId: Int
    type: ActivityType
    isFollowing: Boolean
    hasReplies: Boolean
    hasRepliesOrTypeText: Boolean
    createdAt: Int
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    userId_not: Int
    userId_in: [Int]
    userId_not_in: [Int]
    messengerId_not: Int
    messengerId_in: [Int]
    messengerId_not_in: [Int]
    mediaId_not: Int
    mediaId_in: [Int]
    mediaId_not_in: [Int]
    type_not: ActivityType
    type_in: [ActivityType]
    type_not_in: [ActivityType]
    createdAt_greater: Int
    createdAt_lesser: Int
    sort: [ActivitySort]
  ): [ActivityUnion]
  activityReplies(
    id: Int
    activityId: Int
  ): [ActivityReply]
  threads(
    id: Int
    userId: Int
    replyUserId: Int
    subscribed: Boolean
    categoryId: Int
    mediaCategoryId: Int
    search: String
    id_in: [Int]
    sort: [ThreadSort]
  ): [Thread]
  threadComments(
    id: Int
    threadId: Int
    userId: Int
    sort: [ThreadCommentSort]
  ): [ThreadComment]
  reviews(
    id: Int
    mediaId: Int
    userId: Int
    mediaType: MediaType
    sort: [ReviewSort]
  ): [Review]
  recommendations(
    id: Int
    mediaId: Int
    mediaRecommendationId: Int
    userId: Int
    rating: Int
    onList: Boolean
    rating_greater: Int
    rating_lesser: Int
    sort: [RecommendationSort]
  ): [Recommendation]
  likes(
    likeableId: Int
    type: LikeableType
  ): [User]
}
```

### Fields

#### [`InternalPage`.`mediaSubmissions`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSubmission`](/docs/types/objects/media-submission) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.mediaSubmissions`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.mediaSubmissions`.`submissionId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.mediaSubmissions`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.mediaSubmissions`.`assigneeId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.mediaSubmissions`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionStatus`](/docs/types/enums/submission-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`InternalPage.mediaSubmissions`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's type

##### [`InternalPage.mediaSubmissions`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionSort`](/docs/types/enums/submission-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`characterSubmissions`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterSubmission`](/docs/types/objects/character-submission) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.characterSubmissions`.`characterId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.characterSubmissions`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the submitter of the submission

##### [`InternalPage.characterSubmissions`.`assigneeId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.characterSubmissions`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionStatus`](/docs/types/enums/submission-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the status of the submission

##### [`InternalPage.characterSubmissions`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionSort`](/docs/types/enums/submission-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`staffSubmissions`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSubmission`](/docs/types/objects/staff-submission) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.staffSubmissions`.`staffId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.staffSubmissions`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the submitter of the submission

##### [`InternalPage.staffSubmissions`.`assigneeId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.staffSubmissions`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionStatus`](/docs/types/enums/submission-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the status of the submission

##### [`InternalPage.staffSubmissions`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionSort`](/docs/types/enums/submission-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`revisionHistory`](#)<span className="gqlmd-mdx-bullet">●</span>[`RevisionHistory`](/docs/types/objects/revision-history) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.revisionHistory`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id

##### [`InternalPage.revisionHistory`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`InternalPage.revisionHistory`.`characterId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the character id

##### [`InternalPage.revisionHistory`.`staffId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id

##### [`InternalPage.revisionHistory`.`studioId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id

#### [`InternalPage`.`reports`](#)<span className="gqlmd-mdx-bullet">●</span>[`Report`](/docs/types/objects/report) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.reports`.`reporterId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.reports`.`reportedId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`InternalPage`.`modActions`](#)<span className="gqlmd-mdx-bullet">●</span>[`ModAction`](/docs/types/objects/mod-action) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.modActions`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.modActions`.`modId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.modActions`.`modId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`InternalPage.modActions`.`modId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

(max 10,000 items)

##### [`InternalPage.modActions`.`modId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

(max 10,000 items)

#### [`InternalPage`.`userBlockSearch`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.userBlockSearch`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

#### [`InternalPage`.`pageInfo`](#)<span className="gqlmd-mdx-bullet">●</span>[`PageInfo`](/docs/types/objects/page-info) <badge color="neutral" size="sm" variant="subtle">object</badge>

The pagination information

#### [`InternalPage`.`users`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.users`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id

##### [`InternalPage.users`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the name of the user

##### [`InternalPage.users`.`isModerator`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to moderators only if true

##### [`InternalPage.users`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`InternalPage.users`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.media`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`InternalPage.media`.`idMal`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id

##### [`InternalPage.media`.`startDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`InternalPage.media`.`endDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`InternalPage.media`.`season`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSeason`](/docs/types/enums/media-season) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the season the media was released in

##### [`InternalPage.media`.`seasonYear`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument

##### [`InternalPage.media`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's type

##### [`InternalPage.media`.`format`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format

##### [`InternalPage.media`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status

##### [`InternalPage.media`.`episodes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

##### [`InternalPage.media`.`duration`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

##### [`InternalPage.media`.`chapters`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

##### [`InternalPage.media`.`volumes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

##### [`InternalPage.media`.`isAdult`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by if the media's intended for 18+ adult audiences

##### [`InternalPage.media`.`genre`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres

##### [`InternalPage.media`.`tag`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags

##### [`InternalPage.media`.`minimumTagRank`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Only apply the tags filter argument to tags above this rank. Default: 18

##### [`InternalPage.media`.`tagCategory`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category

##### [`InternalPage.media`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media on the authenticated user's lists

##### [`InternalPage.media`.`licensedBy`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites name with a online streaming or reading license

##### [`InternalPage.media`.`licensedById`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites id with a online streaming or reading license

##### [`InternalPage.media`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`InternalPage.media`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`InternalPage.media`.`source`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSource`](/docs/types/enums/media-source) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the source type of the media

##### [`InternalPage.media`.`countryOfOrigin`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin

##### [`InternalPage.media`.`isLicensed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is officially licensed or a self-published doujin release

##### [`InternalPage.media`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`InternalPage.media`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`InternalPage.media`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`InternalPage.media`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`InternalPage.media`.`idMal_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id

##### [`InternalPage.media`.`idMal_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id (max 10,000 items)

##### [`InternalPage.media`.`idMal_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id (max 10,000 items)

##### [`InternalPage.media`.`startDate_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`InternalPage.media`.`startDate_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`InternalPage.media`.`startDate_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`InternalPage.media`.`endDate_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`InternalPage.media`.`endDate_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`InternalPage.media`.`endDate_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`InternalPage.media`.`format_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format (max 10,000 items)

##### [`InternalPage.media`.`format_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format

##### [`InternalPage.media`.`format_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format (max 10,000 items)

##### [`InternalPage.media`.`status_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status (max 10,000 items)

##### [`InternalPage.media`.`status_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status

##### [`InternalPage.media`.`status_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status (max 10,000 items)

##### [`InternalPage.media`.`episodes_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

##### [`InternalPage.media`.`episodes_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

##### [`InternalPage.media`.`duration_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

##### [`InternalPage.media`.`duration_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

##### [`InternalPage.media`.`chapters_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

##### [`InternalPage.media`.`chapters_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

##### [`InternalPage.media`.`volumes_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

##### [`InternalPage.media`.`volumes_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

##### [`InternalPage.media`.`genre_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres (max 10,000 items)

##### [`InternalPage.media`.`genre_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres (max 10,000 items)

##### [`InternalPage.media`.`tag_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags (max 10,000 items)

##### [`InternalPage.media`.`tag_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags (max 10,000 items)

##### [`InternalPage.media`.`tagCategory_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category (max 10,000 items)

##### [`InternalPage.media`.`tagCategory_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category (max 10,000 items)

##### [`InternalPage.media`.`licensedBy_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites name with a online streaming or reading license (max 10,000 items)

##### [`InternalPage.media`.`licensedById_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites id with a online streaming or reading license (max 10,000 items)

##### [`InternalPage.media`.`averageScore_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`InternalPage.media`.`averageScore_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`InternalPage.media`.`averageScore_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`InternalPage.media`.`popularity_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`InternalPage.media`.`popularity_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`InternalPage.media`.`popularity_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`InternalPage.media`.`source_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSource`](/docs/types/enums/media-source) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the source type of the media (max 10,000 items)

##### [`InternalPage.media`.`countryOfOrigin_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin (max 10,000 items)

##### [`InternalPage.media`.`countryOfOrigin_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin (max 10,000 items)

##### [`InternalPage.media`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSort`](/docs/types/enums/media-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.characters`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id

##### [`InternalPage.characters`.`isBirthday`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character by if its their birthday today

##### [`InternalPage.characters`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`InternalPage.characters`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id

##### [`InternalPage.characters`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id (max 10,000 items)

##### [`InternalPage.characters`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id (max 10,000 items)

##### [`InternalPage.characters`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterSort`](/docs/types/enums/character-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.staff`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id

##### [`InternalPage.staff`.`isBirthday`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by staff by if its their birthday today

##### [`InternalPage.staff`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`InternalPage.staff`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id

##### [`InternalPage.staff`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id (max 10,000 items)

##### [`InternalPage.staff`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id (max 10,000 items)

##### [`InternalPage.staff`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`studios`](#)<span className="gqlmd-mdx-bullet">●</span>[`Studio`](/docs/types/objects/studio) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.studios`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id

##### [`InternalPage.studios`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`InternalPage.studios`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id

##### [`InternalPage.studios`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id (max 10,000 items)

##### [`InternalPage.studios`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id (max 10,000 items)

##### [`InternalPage.studios`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StudioSort`](/docs/types/enums/studio-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`mediaList`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaList`](/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.mediaList`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a list entry's id

##### [`InternalPage.mediaList`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's id

##### [`InternalPage.mediaList`.`userName`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's name

##### [`InternalPage.mediaList`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the list entries media type

##### [`InternalPage.mediaList`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

##### [`InternalPage.mediaList`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry

##### [`InternalPage.mediaList`.`isFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter list entries to users who are being followed by the authenticated user

##### [`InternalPage.mediaList`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

##### [`InternalPage.mediaList`.`startedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`InternalPage.mediaList`.`completedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`InternalPage.mediaList`.`compareWithAuthList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Limit to only entries also on the auth user's list. Requires user id or name arguments.

##### [`InternalPage.mediaList`.`userId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's id (max 10,000 items)

##### [`InternalPage.mediaList`.`status_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

##### [`InternalPage.mediaList`.`status_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

##### [`InternalPage.mediaList`.`status_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

##### [`InternalPage.mediaList`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry (max 10,000 items)

##### [`InternalPage.mediaList`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry (max 10,000 items)

##### [`InternalPage.mediaList`.`notes_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

##### [`InternalPage.mediaList`.`startedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`InternalPage.mediaList`.`startedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`InternalPage.mediaList`.`startedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`InternalPage.mediaList`.`completedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`InternalPage.mediaList`.`completedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`InternalPage.mediaList`.`completedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`InternalPage.mediaList`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListSort`](/docs/types/enums/media-list-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`airingSchedules`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringSchedule`](/docs/types/objects/airing-schedule) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.airingSchedules`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item

##### [`InternalPage.airingSchedules`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media

##### [`InternalPage.airingSchedules`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`InternalPage.airingSchedules`.`airingAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

##### [`InternalPage.airingSchedules`.`notYetAired`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to episodes that haven't yet aired

##### [`InternalPage.airingSchedules`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item

##### [`InternalPage.airingSchedules`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item (max 10,000 items)

##### [`InternalPage.airingSchedules`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item (max 10,000 items)

##### [`InternalPage.airingSchedules`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media

##### [`InternalPage.airingSchedules`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media (max 10,000 items)

##### [`InternalPage.airingSchedules`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media (max 10,000 items)

##### [`InternalPage.airingSchedules`.`episode_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`InternalPage.airingSchedules`.`episode_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number (max 10,000 items)

##### [`InternalPage.airingSchedules`.`episode_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number (max 10,000 items)

##### [`InternalPage.airingSchedules`.`episode_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`InternalPage.airingSchedules`.`episode_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`InternalPage.airingSchedules`.`airingAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

##### [`InternalPage.airingSchedules`.`airingAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

##### [`InternalPage.airingSchedules`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringSort`](/docs/types/enums/airing-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`mediaTrends`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrend`](/docs/types/objects/media-trend) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.mediaTrends`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`InternalPage.mediaTrends`.`date`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

##### [`InternalPage.mediaTrends`.`trending`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`InternalPage.mediaTrends`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`InternalPage.mediaTrends`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`InternalPage.mediaTrends`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`InternalPage.mediaTrends`.`releasing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to stats recorded while the media was releasing

##### [`InternalPage.mediaTrends`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`InternalPage.mediaTrends`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`InternalPage.mediaTrends`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`InternalPage.mediaTrends`.`date_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

##### [`InternalPage.mediaTrends`.`date_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

##### [`InternalPage.mediaTrends`.`trending_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`InternalPage.mediaTrends`.`trending_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`InternalPage.mediaTrends`.`trending_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`InternalPage.mediaTrends`.`averageScore_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`InternalPage.mediaTrends`.`averageScore_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`InternalPage.mediaTrends`.`averageScore_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`InternalPage.mediaTrends`.`popularity_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`InternalPage.mediaTrends`.`popularity_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`InternalPage.mediaTrends`.`popularity_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`InternalPage.mediaTrends`.`episode_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`InternalPage.mediaTrends`.`episode_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`InternalPage.mediaTrends`.`episode_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`InternalPage.mediaTrends`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrendSort`](/docs/types/enums/media-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`notifications`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationUnion`](/docs/types/unions/notification-union) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">union</badge>

##### [`InternalPage.notifications`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of notifications

##### [`InternalPage.notifications`.`resetNotificationCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Reset the unread notification count to 0 on load

##### [`InternalPage.notifications`.`type_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of notifications (max 10,000 items)

#### [`InternalPage`.`followers`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.followers`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

User id of the follower/followed

##### [`InternalPage.followers`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`following`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.following`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

User id of the follower/followed

##### [`InternalPage.following`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`activities`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityUnion`](/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">union</badge>

##### [`InternalPage.activities`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id

##### [`InternalPage.activities`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id

##### [`InternalPage.activities`.`messengerId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message

##### [`InternalPage.activities`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity

##### [`InternalPage.activities`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity

##### [`InternalPage.activities`.`isFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter activity to users who are being followed by the authenticated user

##### [`InternalPage.activities`.`hasReplies`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter activity to only activity with replies

##### [`InternalPage.activities`.`hasRepliesOrTypeText`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter activity to only activity with replies or is of type text

##### [`InternalPage.activities`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time the activity was created

##### [`InternalPage.activities`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id

##### [`InternalPage.activities`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id (max 10,000 items)

##### [`InternalPage.activities`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id (max 10,000 items)

##### [`InternalPage.activities`.`userId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id

##### [`InternalPage.activities`.`userId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id (max 10,000 items)

##### [`InternalPage.activities`.`userId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id (max 10,000 items)

##### [`InternalPage.activities`.`messengerId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message

##### [`InternalPage.activities`.`messengerId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message (max 10,000 items)

##### [`InternalPage.activities`.`messengerId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message (max 10,000 items)

##### [`InternalPage.activities`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity

##### [`InternalPage.activities`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity (max 10,000 items)

##### [`InternalPage.activities`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity (max 10,000 items)

##### [`InternalPage.activities`.`type_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity

##### [`InternalPage.activities`.`type_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity (max 10,000 items)

##### [`InternalPage.activities`.`type_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity (max 10,000 items)

##### [`InternalPage.activities`.`createdAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time the activity was created

##### [`InternalPage.activities`.`createdAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time the activity was created

##### [`InternalPage.activities`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivitySort`](/docs/types/enums/activity-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`activityReplies`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityReply`](/docs/types/objects/activity-reply) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.activityReplies`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the reply id

##### [`InternalPage.activityReplies`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the parent id

#### [`InternalPage`.`threads`](#)<span className="gqlmd-mdx-bullet">●</span>[`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.threads`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id

##### [`InternalPage.threads`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the thread's creator

##### [`InternalPage.threads`.`replyUserId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the last user to comment on the thread

##### [`InternalPage.threads`.`subscribed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by if the currently authenticated user's subscribed threads

##### [`InternalPage.threads`.`categoryId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by thread category id

##### [`InternalPage.threads`.`mediaCategoryId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by thread media id category

##### [`InternalPage.threads`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`InternalPage.threads`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id (max 10,000 items)

##### [`InternalPage.threads`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadSort`](/docs/types/enums/thread-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`threadComments`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadComment`](/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.threadComments`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the comment id

##### [`InternalPage.threadComments`.`threadId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id

##### [`InternalPage.threadComments`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the comment's creator

##### [`InternalPage.threadComments`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadCommentSort`](/docs/types/enums/thread-comment-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`reviews`](#)<span className="gqlmd-mdx-bullet">●</span>[`Review`](/docs/types/objects/review) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.reviews`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by Review id

##### [`InternalPage.reviews`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media id

##### [`InternalPage.reviews`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by user id

##### [`InternalPage.reviews`.`mediaType`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by media type

##### [`InternalPage.reviews`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewSort`](/docs/types/enums/review-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`recommendations`](#)<span className="gqlmd-mdx-bullet">●</span>[`Recommendation`](/docs/types/objects/recommendation) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.recommendations`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by recommendation id

##### [`InternalPage.recommendations`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media id

##### [`InternalPage.recommendations`.`mediaRecommendationId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media recommendation id

##### [`InternalPage.recommendations`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by user who created the recommendation

##### [`InternalPage.recommendations`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

##### [`InternalPage.recommendations`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media on the authenticated user's lists

##### [`InternalPage.recommendations`.`rating_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

##### [`InternalPage.recommendations`.`rating_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

##### [`InternalPage.recommendations`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`RecommendationSort`](/docs/types/enums/recommendation-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`InternalPage`.`likes`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`InternalPage.likes`.`likeableId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the likeable type

##### [`InternalPage.likes`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`LikeableType`](/docs/types/enums/likeable-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of model the id applies to
