# Media

> Anime or Manga

Anime or Manga

```graphql
type Media {
  id: Int!
  idMal: Int
  title: MediaTitle
  type: MediaType
  format: MediaFormat
  status(
    version: Int
  ): MediaStatus
  description(
    asHtml: Boolean
  ): String
  startDate: FuzzyDate
  endDate: FuzzyDate
  season: MediaSeason
  seasonYear: Int
  seasonInt: Int @deprecated
  episodes: Int
  duration: Int
  chapters: Int
  volumes: Int
  countryOfOrigin: CountryCode
  isLicensed: Boolean
  source(
    version: Int
  ): MediaSource
  hashtag: String
  trailer: MediaTrailer
  updatedAt: Int
  coverImage: MediaCoverImage
  bannerImage: String
  genres: [String]
  synonyms: [String]
  averageScore: Int
  meanScore: Int
  popularity: Int
  isLocked: Boolean
  trending: Int
  favourites: Int
  tags: [MediaTag]
  relations: MediaConnection
  characters(
    sort: [CharacterSort]
    role: CharacterRole
    page: Int
    perPage: Int
  ): CharacterConnection
  staff(
    sort: [StaffSort]
    page: Int
    perPage: Int
  ): StaffConnection
  studios(
    sort: [StudioSort]
    isMain: Boolean
  ): StudioConnection
  isFavourite: Boolean!
  isFavouriteBlocked: Boolean!
  isAdult: Boolean
  nextAiringEpisode: AiringSchedule
  airingSchedule(
    notYetAired: Boolean
    page: Int
    perPage: Int
  ): AiringScheduleConnection
  trends(
    sort: [MediaTrendSort]
    releasing: Boolean
    page: Int
    perPage: Int
  ): MediaTrendConnection
  externalLinks: [MediaExternalLink]
  streamingEpisodes: [MediaStreamingEpisode]
  rankings: [MediaRank]
  mediaListEntry: MediaList
  reviews(
    limit: Int
    sort: [ReviewSort]
    page: Int
    perPage: Int
  ): ReviewConnection
  recommendations(
    sort: [RecommendationSort]
    page: Int
    perPage: Int
  ): RecommendationConnection
  stats: MediaStats
  siteUrl: String
  autoCreateForumThread: Boolean
  isRecommendationBlocked: Boolean
  isReviewBlocked: Boolean
  modNotes: String
}
```

### Fields

#### [`Media`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media

#### [`Media`.`idMal`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The mal id of the media

#### [`Media`.`title`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTitle`](/docs/types/objects/media-title) <badge color="neutral" size="sm" variant="subtle">object</badge>

The official titles of the media in various languages

#### [`Media`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of the media; anime or manga

#### [`Media`.`format`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The format the media was released in

#### [`Media`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The current releasing status of the media

##### [`Media.status`.`version`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Provide 2 to use new version 2 of sources enum

#### [`Media`.`description`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Short description of the media's story and characters

##### [`Media.description`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`Media`.`startDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDate`](/docs/types/objects/fuzzy-date) <badge color="neutral" size="sm" variant="subtle">object</badge>

The first official release date of the media

#### [`Media`.`endDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDate`](/docs/types/objects/fuzzy-date) <badge color="neutral" size="sm" variant="subtle">object</badge>

The last official release date of the media

#### [`Media`.`season`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSeason`](/docs/types/enums/media-season) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The season the media was initially released in

#### [`Media`.`seasonYear`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The season year the media was initially released in

#### [`Media`.`seasonInt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No reason given.

</accordion-item>
</accordion>

The year & season the media was initially released in

#### [`Media`.`episodes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of episodes the anime has when complete

#### [`Media`.`duration`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The general length of each anime episode in minutes

#### [`Media`.`chapters`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of chapters the manga has when complete

#### [`Media`.`volumes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of volumes the manga has when complete

#### [`Media`.`countryOfOrigin`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Where the media was created. (ISO 3166-1 alpha-2)

#### [`Media`.`isLicensed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is officially licensed or a self-published doujin release

#### [`Media`.`source`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSource`](/docs/types/enums/media-source) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Source type the media was adapted from.

##### [`Media.source`.`version`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Provide 2 or 3 to use new version 2 or 3 of sources enum

#### [`Media`.`hashtag`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Official Twitter hashtags for the media

#### [`Media`.`trailer`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrailer`](/docs/types/objects/media-trailer) <badge color="neutral" size="sm" variant="subtle">object</badge>

Media trailer or advertisement

#### [`Media`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the media's data was last updated

#### [`Media`.`coverImage`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaCoverImage`](/docs/types/objects/media-cover-image) <badge color="neutral" size="sm" variant="subtle">object</badge>

The cover images of the media

#### [`Media`.`bannerImage`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The banner image of the media

#### [`Media`.`genres`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The genres of the media

#### [`Media`.`synonyms`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Alternative titles of the media

#### [`Media`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A weighted average score of all the user's scores of the media

#### [`Media`.`meanScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Mean score of all the user's scores of the media

#### [`Media`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of users with the media on their list

#### [`Media`.`isLocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons.

#### [`Media`.`trending`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of related activity in the past hour

#### [`Media`.`favourites`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of user's who have favourited the media

#### [`Media`.`tags`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTag`](/docs/types/objects/media-tag) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

List of tags that describes elements and themes of the media

#### [`Media`.`relations`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaConnection`](/docs/types/objects/media-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Other media in the same or connecting franchise

#### [`Media`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterConnection`](/docs/types/objects/character-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

The characters in the media

##### [`Media.characters`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterSort`](/docs/types/enums/character-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Media.characters`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterRole`](/docs/types/enums/character-role) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Media.characters`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Media.characters`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Media`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffConnection`](/docs/types/objects/staff-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

The staff who produced the media

##### [`Media.staff`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Media.staff`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Media.staff`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Media`.`studios`](#)<span className="gqlmd-mdx-bullet">●</span>[`StudioConnection`](/docs/types/objects/studio-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

The companies who produced the media

##### [`Media.studios`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StudioSort`](/docs/types/enums/studio-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Media.studios`.`isMain`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`Media`.`isFavourite`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is marked as favourite by the current authenticated user

#### [`Media`.`isFavouriteBlocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is blocked from being added to favourites

#### [`Media`.`isAdult`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is intended only for 18+ adult audiences

#### [`Media`.`nextAiringEpisode`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringSchedule`](/docs/types/objects/airing-schedule) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media's next episode airing schedule

#### [`Media`.`airingSchedule`](#)<span className="gqlmd-mdx-bullet">●</span>[`AiringScheduleConnection`](/docs/types/objects/airing-schedule-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media's entire airing schedule

##### [`Media.airingSchedule`.`notYetAired`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to episodes that have not yet aired

##### [`Media.airingSchedule`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Media.airingSchedule`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Media`.`trends`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrendConnection`](/docs/types/objects/media-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media's daily trend stats

##### [`Media.trends`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaTrendSort`](/docs/types/enums/media-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Media.trends`.`releasing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter to stats recorded while the media was releasing

##### [`Media.trends`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Media.trends`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Media`.`externalLinks`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaExternalLink`](/docs/types/objects/media-external-link) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

External links to another site related to the media

#### [`Media`.`streamingEpisodes`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStreamingEpisode`](/docs/types/objects/media-streaming-episode) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

Data and links to legal streaming episodes on external sites

#### [`Media`.`rankings`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaRank`](/docs/types/objects/media-rank) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The ranking of the media in a particular time span and format compared to other media

#### [`Media`.`mediaListEntry`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaList`](/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">object</badge>

The authenticated user's media list entry for the media

#### [`Media`.`reviews`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewConnection`](/docs/types/objects/review-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

User reviews of the media

##### [`Media.reviews`.`limit`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`Media.reviews`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ReviewSort`](/docs/types/enums/review-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Media.reviews`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Media.reviews`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Media`.`recommendations`](#)<span className="gqlmd-mdx-bullet">●</span>[`RecommendationConnection`](/docs/types/objects/recommendation-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

User recommendations for similar media

##### [`Media.recommendations`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`RecommendationSort`](/docs/types/enums/recommendation-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Media.recommendations`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Media.recommendations`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Media`.`stats`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStats`](/docs/types/objects/media-stats) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`Media`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the media page on the AniList website

#### [`Media`.`autoCreateForumThread`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media should have forum thread automatically created for it on airing episode release

#### [`Media`.`isRecommendationBlocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is blocked from being recommended to/from

#### [`Media`.`isReviewBlocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is blocked from being reviewed

#### [`Media`.`modNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Notes for site moderators

### Returned By

[`Media`](/docs/operations/queries/media)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`AiringNotification`](/docs/types/objects/airing-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`AiringSchedule`](/docs/types/objects/airing-schedule)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`CharacterEdge`](/docs/types/objects/character-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ListActivity`](/docs/types/objects/list-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaConnection`](/docs/types/objects/media-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaDataChangeNotification`](/docs/types/objects/media-data-change-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaEdge`](/docs/types/objects/media-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaList`](/docs/types/objects/media-list)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaMergeNotification`](/docs/types/objects/media-merge-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmission`](/docs/types/objects/media-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmissionEdge`](/docs/types/objects/media-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmissionUpdateNotification`](/docs/types/objects/media-submission-update-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaTrend`](/docs/types/objects/media-trend)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Recommendation`](/docs/types/objects/recommendation)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RelatedMediaAdditionNotification`](/docs/types/objects/related-media-addition-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Review`](/docs/types/objects/review)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RevisionHistory`](/docs/types/objects/revision-history)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Thread`](/docs/types/objects/thread)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
