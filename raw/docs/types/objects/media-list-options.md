# MediaListOptions

> A user's list options

A user's list options

```graphql
type MediaListOptions {
  scoreFormat: ScoreFormat
  rowOrder: String
  useLegacyLists: Boolean @deprecated
  animeList: MediaListTypeOptions
  mangaList: MediaListTypeOptions
  sharedTheme: Json @deprecated
  sharedThemeEnabled: Boolean @deprecated
}
```

### Fields

#### [`MediaListOptions`.`scoreFormat`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreFormat`](/docs/types/enums/score-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The score format the user is using for media lists

#### [`MediaListOptions`.`rowOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The default order list rows should be displayed in

#### [`MediaListOptions`.`useLegacyLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No longer used

</accordion-item>
</accordion>

#### [`MediaListOptions`.`animeList`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListTypeOptions`](/docs/types/objects/media-list-type-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's anime list options

#### [`MediaListOptions`.`mangaList`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListTypeOptions`](/docs/types/objects/media-list-type-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's manga list options

#### [`MediaListOptions`.`sharedTheme`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](/docs/types/scalars/json) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No longer used

</accordion-item>
</accordion>

The list theme options for both lists

#### [`MediaListOptions`.`sharedThemeEnabled`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No longer used

</accordion-item>
</accordion>

If the shared theme should be used instead of the individual list themes

### Member Of

[`User`](/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
