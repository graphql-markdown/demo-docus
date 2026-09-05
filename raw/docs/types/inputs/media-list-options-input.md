# MediaListOptionsInput

> A user's list options for anime or manga lists

A user's list options for anime or manga lists

```graphql
input MediaListOptionsInput {
  sectionOrder: [String]
  splitCompletedSectionByFormat: Boolean
  customLists: [String]
  advancedScoring: [String]
  advancedScoringEnabled: Boolean
  theme: String
}
```

### Fields

#### [`MediaListOptionsInput`.`sectionOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The order each list should be displayed in

#### [`MediaListOptionsInput`.`splitCompletedSectionByFormat`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the completed sections of the list should be separated by format

#### [`MediaListOptionsInput`.`customLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The names of the user's custom lists

#### [`MediaListOptionsInput`.`advancedScoring`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The names of the user's advanced scoring sections

#### [`MediaListOptionsInput`.`advancedScoringEnabled`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If advanced scoring is enabled

#### [`MediaListOptionsInput`.`theme`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

list theme

### Member Of

[`UpdateUser`](/docs/operations/mutations/update-user)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>
