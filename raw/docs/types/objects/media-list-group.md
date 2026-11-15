---
title: "MediaListGroup"
description: "List group of anime or manga entries"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/media-list-group"
---
# MediaListGroup

> List group of anime or manga entries

List group of anime or manga entries

```graphql
type MediaListGroup {
  entries: [MediaList]
  name: String
  isCustomList: Boolean
  isSplitCompletedList: Boolean
  status: MediaListStatus
}
```

### Fields

#### [`MediaListGroup`.`entries`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaList`](https://graphql-markdown.dev/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

Media list entries

#### [`MediaListGroup`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaListGroup`.`isCustomList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaListGroup`.`isSplitCompletedList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaListGroup`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](https://graphql-markdown.dev/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

### Member Of

[`MediaListCollection`](https://graphql-markdown.dev/docs/types/objects/media-list-collection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
