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

#### [`MediaListGroup`.`entries`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaList`](/docs/types/objects/media-list) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

Media list entries

#### [`MediaListGroup`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaListGroup`.`isCustomList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaListGroup`.`isSplitCompletedList`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaListGroup`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListStatus`](/docs/types/enums/media-list-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

### Member Of

[`MediaListCollection`](/docs/types/objects/media-list-collection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
