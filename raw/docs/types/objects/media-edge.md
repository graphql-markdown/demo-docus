# MediaEdge

> Media connection edge

Media connection edge

```graphql
type MediaEdge {
  node: Media
  id: Int
  relationType(
    version: Int
  ): MediaRelation
  isMainStudio: Boolean!
  characters: [Character]
  characterRole: CharacterRole
  characterName: String
  roleNotes: String
  dubGroup: String
  staffRole: String
  voiceActors(
    language: StaffLanguage
    sort: [StaffSort]
  ): [Staff]
  voiceActorRoles(
    language: StaffLanguage
    sort: [StaffSort]
  ): [StaffRoleType]
  favouriteOrder: Int
}
```

### Fields

#### [`MediaEdge`.`node`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaEdge`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the connection

#### [`MediaEdge`.`relationType`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaRelation`](/docs/types/enums/media-relation) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of relation to the parent model

##### [`MediaEdge.relationType`.`version`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Provide 3 to use new version 3 of relation enum

#### [`MediaEdge`.`isMainStudio`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the studio is the main animation studio of the media (For Studio->MediaConnection field only)

#### [`MediaEdge`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The characters in the media voiced by the parent actor

#### [`MediaEdge`.`characterRole`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterRole`](/docs/types/enums/character-role) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The characters role in the media

#### [`MediaEdge`.`characterName`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Media specific character name

#### [`MediaEdge`.`roleNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Notes regarding the VA's role for the character

#### [`MediaEdge`.`dubGroup`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.

#### [`MediaEdge`.`staffRole`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The role of the staff member in the production of the media

#### [`MediaEdge`.`voiceActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character

##### [`MediaEdge.voiceActors`.`language`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffLanguage`](/docs/types/enums/staff-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`MediaEdge.voiceActors`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`MediaEdge`.`voiceActorRoles`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffRoleType`](/docs/types/objects/staff-role-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character with role date

##### [`MediaEdge.voiceActorRoles`.`language`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffLanguage`](/docs/types/enums/staff-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`MediaEdge.voiceActorRoles`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`MediaEdge`.`favouriteOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The order the media should be displayed from the users favourites

### Member Of

[`MediaConnection`](/docs/types/objects/media-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmission`](/docs/types/objects/media-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
