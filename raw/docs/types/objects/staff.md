---
title: "Staff"
description: "Voice actors or production staff"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/staff"
---
# Staff

> Voice actors or production staff

Voice actors or production staff

```graphql
type Staff {
  id: Int!
  name: StaffName
  language: StaffLanguage @deprecated
  languageV2: String
  image: StaffImage
  description(
    asHtml: Boolean
  ): String
  primaryOccupations: [String]
  gender: String
  dateOfBirth: FuzzyDate
  dateOfDeath: FuzzyDate
  age: Int
  yearsActive: [Int]
  homeTown: String
  bloodType: String
  isFavourite: Boolean!
  isFavouriteBlocked: Boolean!
  siteUrl: String
  staffMedia(
    sort: [MediaSort]
    type: MediaType
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  characters(
    sort: [CharacterSort]
    page: Int
    perPage: Int
  ): CharacterConnection
  characterMedia(
    sort: [MediaSort]
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  updatedAt: Int @deprecated
  staff: Staff
  submitter: User
  submissionStatus: Int
  submissionNotes: String
  favourites: Int
  modNotes: String
}
```

### Fields

#### [`Staff`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the staff member

#### [`Staff`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffName`](https://graphql-markdown.dev/docs/types/objects/staff-name) <badge color="neutral" size="sm" variant="subtle">object</badge>

The names of the staff member

#### [`Staff`.`language`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffLanguage`](https://graphql-markdown.dev/docs/types/enums/staff-language) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Replaced with languageV2

</accordion-item>
</accordion>

The primary language the staff member dub's in

#### [`Staff`.`languageV2`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu

#### [`Staff`.`image`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffImage`](https://graphql-markdown.dev/docs/types/objects/staff-image) <badge color="neutral" size="sm" variant="subtle">object</badge>

The staff images

#### [`Staff`.`description`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A general description of the staff member

##### [`Staff.description`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`Staff`.`primaryOccupations`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's primary occupations

#### [`Staff`.`gender`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The staff's gender. Usually Male, Female, or Non-binary but can be any string.

#### [`Staff`.`dateOfBirth`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDate`](https://graphql-markdown.dev/docs/types/objects/fuzzy-date) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`Staff`.`dateOfDeath`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDate`](https://graphql-markdown.dev/docs/types/objects/fuzzy-date) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`Staff`.`age`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's age in years

#### [`Staff`.`yearsActive`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<span>

startYear, endYear

</span>

 (If the 2nd value is not present staff is still active)

#### [`Staff`.`homeTown`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The persons birthplace or hometown

#### [`Staff`.`bloodType`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The persons blood type

#### [`Staff`.`isFavourite`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the staff member is marked as favourite by the currently authenticated user

#### [`Staff`.`isFavouriteBlocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the staff member is blocked from being added to favourites

#### [`Staff`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the staff page on the AniList website

#### [`Staff`.`staffMedia`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaConnection`](https://graphql-markdown.dev/docs/types/objects/media-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Media where the staff member has a production role

##### [`Staff.staffMedia`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSort`](https://graphql-markdown.dev/docs/types/enums/media-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Staff.staffMedia`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](https://graphql-markdown.dev/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Staff.staffMedia`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`Staff.staffMedia`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Staff.staffMedia`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Staff`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterConnection`](https://graphql-markdown.dev/docs/types/objects/character-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Characters voiced by the actor

##### [`Staff.characters`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterSort`](https://graphql-markdown.dev/docs/types/enums/character-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Staff.characters`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Staff.characters`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Staff`.`characterMedia`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaConnection`](https://graphql-markdown.dev/docs/types/objects/media-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Media the actor voiced characters in. (Same data as characters with media as node instead of characters)

##### [`Staff.characterMedia`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSort`](https://graphql-markdown.dev/docs/types/enums/media-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Staff.characterMedia`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`Staff.characterMedia`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Staff.characterMedia`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Staff`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No data available

</accordion-item>
</accordion>

#### [`Staff`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](https://graphql-markdown.dev/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

Staff member that the submission is referencing

#### [`Staff`.`submitter`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

Submitter for the submission

#### [`Staff`.`submissionStatus`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Status of the submission

#### [`Staff`.`submissionNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Inner details of submission status

#### [`Staff`.`favourites`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of user's who have favourited the staff member

#### [`Staff`.`modNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Notes for site moderators

### Returned By

[`Staff`](https://graphql-markdown.dev/docs/operations/queries/staff)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`CharacterEdge`](https://graphql-markdown.dev/docs/types/objects/character-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`CharacterSubmissionEdge`](https://graphql-markdown.dev/docs/types/objects/character-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaCharacter`](https://graphql-markdown.dev/docs/types/objects/media-character)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaEdge`](https://graphql-markdown.dev/docs/types/objects/media-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmissionEdge`](https://graphql-markdown.dev/docs/types/objects/media-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](https://graphql-markdown.dev/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RevisionHistory`](https://graphql-markdown.dev/docs/types/objects/revision-history)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Staff`](https://graphql-markdown.dev/docs/types/objects/staff)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffConnection`](https://graphql-markdown.dev/docs/types/objects/staff-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffEdge`](https://graphql-markdown.dev/docs/types/objects/staff-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffRoleType`](https://graphql-markdown.dev/docs/types/objects/staff-role-type)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffStats`](https://graphql-markdown.dev/docs/types/objects/staff-stats)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffSubmission`](https://graphql-markdown.dev/docs/types/objects/staff-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffSubmissionUpdateNotification`](https://graphql-markdown.dev/docs/types/objects/staff-submission-update-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserStaffStatistic`](https://graphql-markdown.dev/docs/types/objects/user-staff-statistic)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserVoiceActorStatistic`](https://graphql-markdown.dev/docs/types/objects/user-voice-actor-statistic)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
