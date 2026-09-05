# ActivityReplyLikeNotification

> Notification for when a activity reply is liked

Notification for when a activity reply is liked

```graphql
type ActivityReplyLikeNotification {
  id: Int!
  userId: Int!
  type: NotificationType
  activityId: Int!
  context: String
  createdAt: Int
  activity: ActivityUnion
  user: User
}
```

### Fields

#### [`ActivityReplyLikeNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`ActivityReplyLikeNotification`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user who liked to the activity reply

#### [`ActivityReplyLikeNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`ActivityReplyLikeNotification`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity where the reply which was liked

#### [`ActivityReplyLikeNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`ActivityReplyLikeNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`ActivityReplyLikeNotification`.`activity`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityUnion`](/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

The liked activity

#### [`ActivityReplyLikeNotification`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who liked the activity reply

### Implemented By

[`NotificationUnion`](/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
