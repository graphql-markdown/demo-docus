# ToggleThreadSubscription

> Toggle the subscription of a forum thread

Toggle the subscription of a forum thread

```graphql
ToggleThreadSubscription(
  threadId: Int
  subscribe: Boolean
): Thread
```

### Arguments

#### [`ToggleThreadSubscription`.`threadId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the forum thread to un/subscribe

#### [`ToggleThreadSubscription`.`subscribe`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether to subscribe or unsubscribe from the forum thread

### Type

#### [`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread
