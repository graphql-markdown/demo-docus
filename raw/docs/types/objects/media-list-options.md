---
title: "MediaListOptions"
description: "A user's list options"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/media-list-options"
---
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

#### [`MediaListOptions`.`scoreFormat`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreFormat`](https://graphql-markdown.dev/docs/types/enums/score-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The score format the user is using for media lists

#### [`MediaListOptions`.`rowOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The default order list rows should be displayed in

#### [`MediaListOptions`.`useLegacyLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No longer used

</accordion-item>
</accordion>

#### [`MediaListOptions`.`animeList`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListTypeOptions`](https://graphql-markdown.dev/docs/types/objects/media-list-type-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's anime list options

#### [`MediaListOptions`.`mangaList`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListTypeOptions`](https://graphql-markdown.dev/docs/types/objects/media-list-type-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's manga list options

#### [`MediaListOptions`.`sharedTheme`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](https://graphql-markdown.dev/docs/types/scalars/json) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No longer used

</accordion-item>
</accordion>

The list theme options for both lists

#### [`MediaListOptions`.`sharedThemeEnabled`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

No longer used

</accordion-item>
</accordion>

If the shared theme should be used instead of the individual list themes

### Member Of

[`User`](https://graphql-markdown.dev/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
