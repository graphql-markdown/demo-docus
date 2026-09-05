# MediaListCollection

> List of anime or manga

List of anime or manga

```graphql
type MediaListCollection {
  lists: [MediaListGroup]
  user: User
  hasNextChunk: Boolean
  statusLists(
    asArray: Boolean
  ): [[MediaList]] @deprecated
  customLists(
    asArray: Boolean
  ): [[MediaList]] @deprecated
}
```

### Fields

#### [`MediaListCollection`.`lists`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListGroup`](/docs/types/objects/media-list-group) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

Grouped media list entries

#### [`MediaListCollection`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The owner of the list

#### [`MediaListCollection`.`hasNextChunk`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If there is another chunk

#### [`MediaListCollection`.`statusLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`[[MediaList]]`](/docs/types/objects/media-list) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Not GraphQL spec compliant, use lists field instead.

</accordion-item>
</accordion>

A map of media list entry arrays grouped by status

##### [`MediaListCollection.statusLists`.`asArray`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaListCollection`.`customLists`](#)<span className="gqlmd-mdx-bullet">●</span>[`[[MediaList]]`](/docs/types/objects/media-list) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Not GraphQL spec compliant, use lists field instead.

</accordion-item>
</accordion>

A map of media list entry arrays grouped by custom lists

##### [`MediaListCollection.customLists`.`asArray`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

### Returned By

[`MediaListCollection`](/docs/operations/queries/media-list-collection)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>
