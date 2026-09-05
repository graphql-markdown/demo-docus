# DeleteCustomList

> Delete a custom list and remove the list entries from it

Delete a custom list and remove the list entries from it

```graphql
DeleteCustomList(
  customList: String
  type: MediaType
): Deleted
```

### Arguments

#### [`DeleteCustomList`.`customList`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name of the custom list to delete

#### [`DeleteCustomList`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaType`](/docs/types/enums/media-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The media list type of the custom list

### Type

#### [`Deleted`](/docs/types/objects/deleted) <badge color="neutral" size="sm" variant="subtle">object</badge>

Deleted data type
