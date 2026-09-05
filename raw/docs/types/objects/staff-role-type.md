# StaffRoleType

> Voice actor role for a character

Voice actor role for a character

```graphql
type StaffRoleType {
  voiceActor: Staff
  roleNotes: String
  dubGroup: String
}
```

### Fields

#### [`StaffRoleType`.`voiceActor`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character

#### [`StaffRoleType`.`roleNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Notes regarding the VA's role for the character

#### [`StaffRoleType`.`dubGroup`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.

### Member Of

[`CharacterEdge`](/docs/types/objects/character-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaEdge`](/docs/types/objects/media-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
