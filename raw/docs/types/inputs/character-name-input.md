# CharacterNameInput

> The names of the character

The names of the character

```graphql
input CharacterNameInput {
  first: String
  middle: String
  last: String
  native: String
  alternative: [String]
  alternativeSpoiler: [String]
}
```

### Fields

#### [`CharacterNameInput`.`first`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's given name

#### [`CharacterNameInput`.`middle`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's middle name

#### [`CharacterNameInput`.`last`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's surname

#### [`CharacterNameInput`.`native`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's full name in their native language

#### [`CharacterNameInput`.`alternative`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Other names the character might be referred by

#### [`CharacterNameInput`.`alternativeSpoiler`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Other names the character might be referred to as but are spoilers
