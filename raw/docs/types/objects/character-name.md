# CharacterName

> The names of the character

The names of the character

```graphql
type CharacterName {
  first: String
  middle: String
  last: String
  full: String
  native: String
  alternative: [String]
  alternativeSpoiler: [String]
  userPreferred: String
}
```

### Fields

#### [`CharacterName`.`first`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's given name

#### [`CharacterName`.`middle`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's middle name

#### [`CharacterName`.`last`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's surname

#### [`CharacterName`.`full`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's first and last name

#### [`CharacterName`.`native`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The character's full name in their native language

#### [`CharacterName`.`alternative`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Other names the character might be referred to as

#### [`CharacterName`.`alternativeSpoiler`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Other names the character might be referred to as but are spoilers

#### [`CharacterName`.`userPreferred`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The currently authenticated users preferred name language. Default romaji for non-authenticated

### Member Of

[`Character`](/docs/types/objects/character)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
