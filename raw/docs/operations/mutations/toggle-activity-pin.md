# ToggleActivityPin

> Toggle activity to be pinned to the top of the user's activity feed

Toggle activity to be pinned to the top of the user's activity feed

```graphql
ToggleActivityPin(
  id: Int
  pinned: Boolean
): ActivityUnion
```

### Arguments

#### [`ToggleActivityPin`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Toggle activity id to be pinned

#### [`ToggleActivityPin`.`pinned`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity should be pinned or unpinned

### Type

#### [`ActivityUnion`](/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

Activity union type
