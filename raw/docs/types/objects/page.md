# Page

> Page of data. Limited to a max depth of 5000 entries. This is calculated as the page parameter multiplied by the perPage parameter.

Page of data. Limited to a max depth of 5000 entries. This is calculated as the page parameter multiplied by the perPage parameter.

```graphql
type Page {
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

#### [`Page`.`pageInfo`](#)<span className="gqlmd-mdx-bullet">●</span>[`PageInfo`](/docs/types/objects/page-info) <badge color="neutral" size="sm" variant="subtle">object</badge>

The pagination information

#### [`Page`.`users`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.users`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id

##### [`Page.users`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the name of the user

##### [`Page.users`.`isModerator`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to moderators only if true

##### [`Page.users`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`Page.users`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.media`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`Page.media`.`idMal`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id

##### [`Page.media`.`startDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`Page.media`.`endDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`Page.media`.`season`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSeason`](/docs/types/enums/media-season) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the season the media was released in

##### [`Page.media`.`seasonYear`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument

##### [`Page.media`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's type

##### [`Page.media`.`format`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format

##### [`Page.media`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status

##### [`Page.media`.`episodes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

##### [`Page.media`.`duration`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

##### [`Page.media`.`chapters`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

##### [`Page.media`.`volumes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

##### [`Page.media`.`isAdult`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by if the media's intended for 18+ adult audiences

##### [`Page.media`.`genre`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres

##### [`Page.media`.`tag`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags

##### [`Page.media`.`minimumTagRank`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Only apply the tags filter argument to tags above this rank. Default: 18

##### [`Page.media`.`tagCategory`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category

##### [`Page.media`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media on the authenticated user's lists

##### [`Page.media`.`licensedBy`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites name with a online streaming or reading license

##### [`Page.media`.`licensedById`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites id with a online streaming or reading license

##### [`Page.media`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`Page.media`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`Page.media`.`source`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSource`](/docs/types/enums/media-source) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the source type of the media

##### [`Page.media`.`countryOfOrigin`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin

##### [`Page.media`.`isLicensed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is officially licensed or a self-published doujin release

##### [`Page.media`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`Page.media`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`Page.media`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`Page.media`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`Page.media`.`idMal_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id

##### [`Page.media`.`idMal_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id (max 10,000 items)

##### [`Page.media`.`idMal_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id (max 10,000 items)

##### [`Page.media`.`startDate_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`Page.media`.`startDate_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`Page.media`.`startDate_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

##### [`Page.media`.`endDate_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`Page.media`.`endDate_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`Page.media`.`endDate_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

##### [`Page.media`.`format_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format (max 10,000 items)

##### [`Page.media`.`format_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format

##### [`Page.media`.`format_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format (max 10,000 items)

##### [`Page.media`.`status_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status (max 10,000 items)

##### [`Page.media`.`status_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status

##### [`Page.media`.`status_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status (max 10,000 items)

##### [`Page.media`.`episodes_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

##### [`Page.media`.`episodes_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

##### [`Page.media`.`duration_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

##### [`Page.media`.`duration_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

##### [`Page.media`.`chapters_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

##### [`Page.media`.`chapters_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

##### [`Page.media`.`volumes_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

##### [`Page.media`.`volumes_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

##### [`Page.media`.`genre_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres (max 10,000 items)

##### [`Page.media`.`genre_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres (max 10,000 items)

##### [`Page.media`.`tag_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags (max 10,000 items)

##### [`Page.media`.`tag_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags (max 10,000 items)

##### [`Page.media`.`tagCategory_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category (max 10,000 items)

##### [`Page.media`.`tagCategory_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category (max 10,000 items)

##### [`Page.media`.`licensedBy_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites name with a online streaming or reading license (max 10,000 items)

##### [`Page.media`.`licensedById_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites id with a online streaming or reading license (max 10,000 items)

##### [`Page.media`.`averageScore_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`Page.media`.`averageScore_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`Page.media`.`averageScore_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

##### [`Page.media`.`popularity_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`Page.media`.`popularity_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`Page.media`.`popularity_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

##### [`Page.media`.`source_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSource`](/docs/types/enums/media-source) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the source type of the media (max 10,000 items)

##### [`Page.media`.`countryOfOrigin_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin (max 10,000 items)

##### [`Page.media`.`countryOfOrigin_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin (max 10,000 items)

##### [`Page.media`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSort`](/docs/types/enums/media-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.characters`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id

##### [`Page.characters`.`isBirthday`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character by if its their birthday today

##### [`Page.characters`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`Page.characters`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id

##### [`Page.characters`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id (max 10,000 items)

##### [`Page.characters`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by character id (max 10,000 items)

##### [`Page.characters`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterSort`](/docs/types/enums/character-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.staff`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id

##### [`Page.staff`.`isBirthday`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by staff by if its their birthday today

##### [`Page.staff`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`Page.staff`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id

##### [`Page.staff`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id (max 10,000 items)

##### [`Page.staff`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id (max 10,000 items)

##### [`Page.staff`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`studios`](#)<span className="gqlmd-mdx-bullet">●</span>[`Studio`](/docs/types/objects/studio) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.studios`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id

##### [`Page.studios`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`Page.studios`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id

##### [`Page.studios`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id (max 10,000 items)

##### [`Page.studios`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id (max 10,000 items)

##### [`Page.studios`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StudioSort`](/docs/types/enums/studio-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`mediaList`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaList`](/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.mediaList`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a list entry's id

##### [`Page.mediaList`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's id

##### [`Page.mediaList`.`userName`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's name

##### [`Page.mediaList`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the list entries media type

##### [`Page.mediaList`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

##### [`Page.mediaList`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry

##### [`Page.mediaList`.`isFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter list entries to users who are being followed by the authenticated user

##### [`Page.mediaList`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

##### [`Page.mediaList`.`startedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`Page.mediaList`.`completedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`Page.mediaList`.`compareWithAuthList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Limit to only entries also on the auth user's list. Requires user id or name arguments.

##### [`Page.mediaList`.`userId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by a user's id (max 10,000 items)

##### [`Page.mediaList`.`status_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

##### [`Page.mediaList`.`status_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status (max 10,000 items)

##### [`Page.mediaList`.`status_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the watching/reading status

##### [`Page.mediaList`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry (max 10,000 items)

##### [`Page.mediaList`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id of the list entry (max 10,000 items)

##### [`Page.mediaList`.`notes_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by note words and #tags

##### [`Page.mediaList`.`startedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`Page.mediaList`.`startedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`Page.mediaList`.`startedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user started the media

##### [`Page.mediaList`.`completedAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`Page.mediaList`.`completedAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`Page.mediaList`.`completedAt_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the date the user completed the media

##### [`Page.mediaList`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListSort`](/docs/types/enums/media-list-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`airingSchedules`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringSchedule`](/docs/types/objects/airing-schedule) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.airingSchedules`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item

##### [`Page.airingSchedules`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media

##### [`Page.airingSchedules`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`Page.airingSchedules`.`airingAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

##### [`Page.airingSchedules`.`notYetAired`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to episodes that haven't yet aired

##### [`Page.airingSchedules`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item

##### [`Page.airingSchedules`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item (max 10,000 items)

##### [`Page.airingSchedules`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the airing schedule item (max 10,000 items)

##### [`Page.airingSchedules`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media

##### [`Page.airingSchedules`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media (max 10,000 items)

##### [`Page.airingSchedules`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of associated media (max 10,000 items)

##### [`Page.airingSchedules`.`episode_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`Page.airingSchedules`.`episode_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number (max 10,000 items)

##### [`Page.airingSchedules`.`episode_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number (max 10,000 items)

##### [`Page.airingSchedules`.`episode_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`Page.airingSchedules`.`episode_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the airing episode number

##### [`Page.airingSchedules`.`airingAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

##### [`Page.airingSchedules`.`airingAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time of airing

##### [`Page.airingSchedules`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringSort`](/docs/types/enums/airing-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`mediaTrends`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrend`](/docs/types/objects/media-trend) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.mediaTrends`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`Page.mediaTrends`.`date`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

##### [`Page.mediaTrends`.`trending`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`Page.mediaTrends`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`Page.mediaTrends`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`Page.mediaTrends`.`episode`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`Page.mediaTrends`.`releasing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to stats recorded while the media was releasing

##### [`Page.mediaTrends`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

##### [`Page.mediaTrends`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`Page.mediaTrends`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

##### [`Page.mediaTrends`.`date_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

##### [`Page.mediaTrends`.`date_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by date

##### [`Page.mediaTrends`.`trending_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`Page.mediaTrends`.`trending_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`Page.mediaTrends`.`trending_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by trending amount

##### [`Page.mediaTrends`.`averageScore_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`Page.mediaTrends`.`averageScore_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`Page.mediaTrends`.`averageScore_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by score

##### [`Page.mediaTrends`.`popularity_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`Page.mediaTrends`.`popularity_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`Page.mediaTrends`.`popularity_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by popularity

##### [`Page.mediaTrends`.`episode_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`Page.mediaTrends`.`episode_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`Page.mediaTrends`.`episode_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by episode number

##### [`Page.mediaTrends`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrendSort`](/docs/types/enums/media-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`notifications`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationUnion`](/docs/types/unions/notification-union) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">union</badge>

##### [`Page.notifications`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of notifications

##### [`Page.notifications`.`resetNotificationCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Reset the unread notification count to 0 on load

##### [`Page.notifications`.`type_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of notifications (max 10,000 items)

#### [`Page`.`followers`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.followers`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

User id of the follower/followed

##### [`Page.followers`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`following`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.following`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

User id of the follower/followed

##### [`Page.following`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserSort`](/docs/types/enums/user-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`activities`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityUnion`](/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">union</badge>

##### [`Page.activities`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id

##### [`Page.activities`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id

##### [`Page.activities`.`messengerId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message

##### [`Page.activities`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity

##### [`Page.activities`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity

##### [`Page.activities`.`isFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter activity to users who are being followed by the authenticated user

##### [`Page.activities`.`hasReplies`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter activity to only activity with replies

##### [`Page.activities`.`hasRepliesOrTypeText`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter activity to only activity with replies or is of type text

##### [`Page.activities`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time the activity was created

##### [`Page.activities`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id

##### [`Page.activities`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id (max 10,000 items)

##### [`Page.activities`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the activity id (max 10,000 items)

##### [`Page.activities`.`userId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id

##### [`Page.activities`.`userId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id (max 10,000 items)

##### [`Page.activities`.`userId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the owner user id (max 10,000 items)

##### [`Page.activities`.`messengerId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message

##### [`Page.activities`.`messengerId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message (max 10,000 items)

##### [`Page.activities`.`messengerId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the id of the user who sent a message (max 10,000 items)

##### [`Page.activities`.`mediaId_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity

##### [`Page.activities`.`mediaId_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity (max 10,000 items)

##### [`Page.activities`.`mediaId_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the associated media id of the activity (max 10,000 items)

##### [`Page.activities`.`type_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity

##### [`Page.activities`.`type_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity (max 10,000 items)

##### [`Page.activities`.`type_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of activity (max 10,000 items)

##### [`Page.activities`.`createdAt_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time the activity was created

##### [`Page.activities`.`createdAt_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the time the activity was created

##### [`Page.activities`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivitySort`](/docs/types/enums/activity-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`activityReplies`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityReply`](/docs/types/objects/activity-reply) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.activityReplies`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the reply id

##### [`Page.activityReplies`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the parent id

#### [`Page`.`threads`](#)<span className="gqlmd-mdx-bullet">●</span>[`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.threads`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id

##### [`Page.threads`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the thread's creator

##### [`Page.threads`.`replyUserId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the last user to comment on the thread

##### [`Page.threads`.`subscribed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by if the currently authenticated user's subscribed threads

##### [`Page.threads`.`categoryId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by thread category id

##### [`Page.threads`.`mediaCategoryId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by thread media id category

##### [`Page.threads`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

##### [`Page.threads`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id (max 10,000 items)

##### [`Page.threads`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadSort`](/docs/types/enums/thread-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`threadComments`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadComment`](/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.threadComments`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the comment id

##### [`Page.threadComments`.`threadId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id

##### [`Page.threadComments`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the comment's creator

##### [`Page.threadComments`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadCommentSort`](/docs/types/enums/thread-comment-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`reviews`](#)<span className="gqlmd-mdx-bullet">●</span>[`Review`](/docs/types/objects/review) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.reviews`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by Review id

##### [`Page.reviews`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media id

##### [`Page.reviews`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by user id

##### [`Page.reviews`.`mediaType`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by media type

##### [`Page.reviews`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewSort`](/docs/types/enums/review-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`recommendations`](#)<span className="gqlmd-mdx-bullet">●</span>[`Recommendation`](/docs/types/objects/recommendation) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.recommendations`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by recommendation id

##### [`Page.recommendations`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media id

##### [`Page.recommendations`.`mediaRecommendationId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by media recommendation id

##### [`Page.recommendations`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by user who created the recommendation

##### [`Page.recommendations`.`rating`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

##### [`Page.recommendations`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media on the authenticated user's lists

##### [`Page.recommendations`.`rating_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

##### [`Page.recommendations`.`rating_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by total rating of the recommendation

##### [`Page.recommendations`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`RecommendationSort`](/docs/types/enums/recommendation-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

#### [`Page`.`likes`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`Page.likes`.`likeableId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the likeable type

##### [`Page.likes`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`LikeableType`](/docs/types/enums/likeable-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of model the id applies to

### Returned By

[`Page`](/docs/operations/queries/page)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>
