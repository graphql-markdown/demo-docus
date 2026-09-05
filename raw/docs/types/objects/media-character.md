# MediaCharacter

> Internal - Media characters separated

Internal - Media characters separated

```graphql
type MediaCharacter {
  id: Int
  role: CharacterRole
  roleNotes: String
  dubGroup: String
  characterName: String
  character: Character
  voiceActor: Staff
}
```

### Fields

#### [`MediaCharacter`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the connection

#### [`MediaCharacter`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterRole`](/docs/types/enums/character-role) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The characters role in the media

#### [`MediaCharacter`.`roleNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaCharacter`.`dubGroup`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaCharacter`.`characterName`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Media specific character name

#### [`MediaCharacter`.`character`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

The characters in the media voiced by the parent actor

#### [`MediaCharacter`.`voiceActor`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actor of the character

### Member Of

[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
