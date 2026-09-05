# Character

> A character that features in an anime or manga

A character that features in an anime or manga

```graphql
type Character {
  id: Int!
  name: CharacterName
  image: CharacterImage
  description(
    asHtml: Boolean
  ): String
  gender: String
  dateOfBirth: FuzzyDate
  age: String
  bloodType: String
  isFavourite: Boolean!
  isFavouriteBlocked: Boolean!
  siteUrl: String
  media(
    sort: [MediaSort]
    type: MediaType
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  updatedAt: Int @deprecated
  favourites: Int
  modNotes: String
}
```

### Fields

#### [`Character`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the character

#### [`Character`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterName`](/docs/types/objects/character-name) <badge color="neutral" size="sm" variant="subtle">object</badge>

The names of the character

#### [`Character`.`image`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterImage`](/docs/types/objects/character-image) <badge color="neutral" size="sm" variant="subtle">object</badge>

Character images

#### [`Character`.`description`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A general description of the character

##### [`Character.description`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`Character`.`gender`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's gender. Usually Male, Female, or Non-binary but can be any string.

#### [`Character`.`dateOfBirth`](#)<span className="gqlmd-mdx-bullet">●</span>[`FuzzyDate`](/docs/types/objects/fuzzy-date) <badge color="neutral" size="sm" variant="subtle">object</badge>

The character's birth date

#### [`Character`.`age`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's age. Note this is a string, not an int, it may contain further text and additional ages.

#### [`Character`.`bloodType`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The characters blood type

#### [`Character`.`isFavourite`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the character is marked as favourite by the currently authenticated user

#### [`Character`.`isFavouriteBlocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the character is blocked from being added to favourites

#### [`Character`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the character page on the AniList website

#### [`Character`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaConnection`](/docs/types/objects/media-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Media that includes the character

##### [`Character.media`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSort`](/docs/types/enums/media-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Character.media`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`Character.media`.`onList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

##### [`Character.media`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`Character.media`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Character`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No data available

</accordion-item>
</accordion>

#### [`Character`.`favourites`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of user's who have favourited the character

#### [`Character`.`modNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Notes for site moderators

### Returned By

[`Character`](/docs/operations/queries/character)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`CharacterConnection`](/docs/types/objects/character-connection)  <badge color="neutral" size="sm" variant="subtle">

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

[`CharacterSubmission`](/docs/types/objects/character-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`CharacterSubmissionUpdateNotification`](/docs/types/objects/character-submission-update-notification)  <badge color="neutral" size="sm" variant="subtle">

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

[`MediaCharacter`](/docs/types/objects/media-character)  <badge color="neutral" size="sm" variant="subtle">

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

[`MediaSubmissionEdge`](/docs/types/objects/media-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

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

[`RevisionHistory`](/docs/types/objects/revision-history)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
