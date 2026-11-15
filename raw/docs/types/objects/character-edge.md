---
title: "CharacterEdge"
description: "Character connection edge"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/character-edge"
---
# CharacterEdge

> Character connection edge

Character connection edge

```graphql
type CharacterEdge {
  node: Character
  id: Int
  role: CharacterRole
  name: String
  voiceActors(
    language: StaffLanguage
    sort: [StaffSort]
  ): [Staff]
  voiceActorRoles(
    language: StaffLanguage
    sort: [StaffSort]
  ): [StaffRoleType]
  media: [Media]
  favouriteOrder: Int
}
```

### Fields

#### [`CharacterEdge`.`node`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](https://graphql-markdown.dev/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`CharacterEdge`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the connection

#### [`CharacterEdge`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterRole`](https://graphql-markdown.dev/docs/types/enums/character-role) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The characters role in the media

#### [`CharacterEdge`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Media specific character name

#### [`CharacterEdge`.`voiceActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](https://graphql-markdown.dev/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character

##### [`CharacterEdge.voiceActors`.`language`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffLanguage`](https://graphql-markdown.dev/docs/types/enums/staff-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`CharacterEdge.voiceActors`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](https://graphql-markdown.dev/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`CharacterEdge`.`voiceActorRoles`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffRoleType`](https://graphql-markdown.dev/docs/types/objects/staff-role-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character with role date

##### [`CharacterEdge.voiceActorRoles`.`language`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffLanguage`](https://graphql-markdown.dev/docs/types/enums/staff-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`CharacterEdge.voiceActorRoles`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](https://graphql-markdown.dev/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`CharacterEdge`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](https://graphql-markdown.dev/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The media the character is in

#### [`CharacterEdge`.`favouriteOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The order the character should be displayed from the users favourites

### Member Of

[`CharacterConnection`](https://graphql-markdown.dev/docs/types/objects/character-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
