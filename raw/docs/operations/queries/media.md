# Media

> Media query

Media query

```graphql
Media(
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
): Media
```

### Arguments

#### [`Media`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

#### [`Media`.`idMal`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id

#### [`Media`.`startDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

#### [`Media`.`endDate`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

#### [`Media`.`season`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSeason`](/docs/types/enums/media-season) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the season the media was released in

#### [`Media`.`seasonYear`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument

#### [`Media`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's type

#### [`Media`.`format`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format

#### [`Media`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status

#### [`Media`.`episodes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

#### [`Media`.`duration`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

#### [`Media`.`chapters`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

#### [`Media`.`volumes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

#### [`Media`.`isAdult`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by if the media's intended for 18+ adult audiences

#### [`Media`.`genre`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres

#### [`Media`.`tag`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags

#### [`Media`.`minimumTagRank`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Only apply the tags filter argument to tags above this rank. Default: 18

#### [`Media`.`tagCategory`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category

#### [`Media`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media on the authenticated user's lists

#### [`Media`.`licensedBy`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites name with a online streaming or reading license

#### [`Media`.`licensedById`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites id with a online streaming or reading license

#### [`Media`.`averageScore`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

#### [`Media`.`popularity`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

#### [`Media`.`source`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSource`](/docs/types/enums/media-source) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the source type of the media

#### [`Media`.`countryOfOrigin`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin

#### [`Media`.`isLicensed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the media is officially licensed or a self-published doujin release

#### [`Media`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

#### [`Media`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id

#### [`Media`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

#### [`Media`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media id (max 10,000 items)

#### [`Media`.`idMal_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id

#### [`Media`.`idMal_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id (max 10,000 items)

#### [`Media`.`idMal_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's MyAnimeList id (max 10,000 items)

#### [`Media`.`startDate_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

#### [`Media`.`startDate_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

#### [`Media`.`startDate_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the start date of the media

#### [`Media`.`endDate_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

#### [`Media`.`endDate_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDateInt`](/docs/types/scalars/fuzzy-date-int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

#### [`Media`.`endDate_like`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the end date of the media

#### [`Media`.`format_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format (max 10,000 items)

#### [`Media`.`format_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format

#### [`Media`.`format_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaFormat`](/docs/types/enums/media-format) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's format (max 10,000 items)

#### [`Media`.`status_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status (max 10,000 items)

#### [`Media`.`status_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status

#### [`Media`.`status_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaStatus`](/docs/types/enums/media-status) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the media's current release status (max 10,000 items)

#### [`Media`.`episodes_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

#### [`Media`.`episodes_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by amount of episodes the media has

#### [`Media`.`duration_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

#### [`Media`.`duration_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's episode length

#### [`Media`.`chapters_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

#### [`Media`.`chapters_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's chapter count

#### [`Media`.`volumes_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

#### [`Media`.`volumes_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's volume count

#### [`Media`.`genre_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres (max 10,000 items)

#### [`Media`.`genre_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's genres (max 10,000 items)

#### [`Media`.`tag_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags (max 10,000 items)

#### [`Media`.`tag_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags (max 10,000 items)

#### [`Media`.`tagCategory_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category (max 10,000 items)

#### [`Media`.`tagCategory_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's tags with in a tag category (max 10,000 items)

#### [`Media`.`licensedBy_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites name with a online streaming or reading license (max 10,000 items)

#### [`Media`.`licensedById_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter media by sites id with a online streaming or reading license (max 10,000 items)

#### [`Media`.`averageScore_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

#### [`Media`.`averageScore_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

#### [`Media`.`averageScore_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's average score

#### [`Media`.`popularity_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

#### [`Media`.`popularity_greater`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

#### [`Media`.`popularity_lesser`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the number of users with this media on their list

#### [`Media`.`source_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSource`](/docs/types/enums/media-source) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the source type of the media (max 10,000 items)

#### [`Media`.`countryOfOrigin_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin (max 10,000 items)

#### [`Media`.`countryOfOrigin_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`CountryCode`](/docs/types/scalars/country-code) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the media's country of origin (max 10,000 items)

#### [`Media`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSort`](/docs/types/enums/media-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

Anime or Manga
