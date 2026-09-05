# MediaListTypeOptions

> A user's list options for anime or manga lists

A user's list options for anime or manga lists

```graphql
type MediaListTypeOptions {
  sectionOrder: [String]
  splitCompletedSectionByFormat: Boolean
  theme: Json @deprecated
  customLists: [String]
  advancedScoring: [String]
  advancedScoringEnabled: Boolean
}
```

### Fields

#### [`MediaListTypeOptions`.`sectionOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The order each list should be displayed in

#### [`MediaListTypeOptions`.`splitCompletedSectionByFormat`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the completed sections of the list should be separated by format

#### [`MediaListTypeOptions`.`theme`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](/docs/types/scalars/json) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

This field has not yet been fully implemented and may change without warning

</accordion-item>
</accordion>

The list theme options

#### [`MediaListTypeOptions`.`customLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The names of the user's custom lists

#### [`MediaListTypeOptions`.`advancedScoring`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The names of the user's advanced scoring sections

#### [`MediaListTypeOptions`.`advancedScoringEnabled`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If advanced scoring is enabled

### Member Of

[`MediaListOptions`](/docs/types/objects/media-list-options)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
