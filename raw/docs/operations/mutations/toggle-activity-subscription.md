# ToggleActivitySubscription

> Toggle the subscription of an activity item

Toggle the subscription of an activity item

```graphql
ToggleActivitySubscription(
  activityId: Int
  subscribe: Boolean
): ActivityUnion
```

### Arguments

#### [`ToggleActivitySubscription`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity to un/subscribe

#### [`ToggleActivitySubscription`.`subscribe`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether to subscribe or unsubscribe from the activity

### Type

#### [`ActivityUnion`](/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

Activity union type
