# ActivityMessageNotification

> Notification for when a user is send an activity message

Notification for when a user is send an activity message

```graphql
type ActivityMessageNotification {
  id: Int!
  userId: Int!
  type: NotificationType
  activityId: Int!
  context: String
  createdAt: Int
  message: MessageActivity
  user: User
}
```

### Fields

#### [`ActivityMessageNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`ActivityMessageNotification`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The if of the user who send the message

#### [`ActivityMessageNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`ActivityMessageNotification`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity message

#### [`ActivityMessageNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`ActivityMessageNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`ActivityMessageNotification`.`message`](#)<span className="gqlmd-mdx-bullet">●</span>[`MessageActivity`](/docs/types/objects/message-activity) <badge color="neutral" size="sm" variant="subtle">object</badge>

The message activity

#### [`ActivityMessageNotification`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who sent the message

### Implemented By

[`NotificationUnion`](/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
