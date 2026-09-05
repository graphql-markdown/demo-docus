# Notification

> Notification query

Notification query

```graphql
Notification(
  type: NotificationType
  resetNotificationCount: Boolean
  type_in: [NotificationType]
): NotificationUnion
```

### Arguments

#### [`Notification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of notifications

#### [`Notification`.`resetNotificationCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Reset the unread notification count to 0 on load

#### [`Notification`.`type_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

Filter by the type of notifications (max 10,000 items)

### Type

#### [`NotificationUnion`](/docs/types/unions/notification-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

Notification union type
