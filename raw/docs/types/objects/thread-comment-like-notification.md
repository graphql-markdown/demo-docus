# ThreadCommentLikeNotification

> Notification for when a thread comment is liked

Notification for when a thread comment is liked

```graphql
type ThreadCommentLikeNotification {
  id: Int!
  userId: Int!
  type: NotificationType
  commentId: Int!
  context: String
  createdAt: Int
  thread: Thread
  comment: ThreadComment
  user: User
}
```

### Fields

#### [`ThreadCommentLikeNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`ThreadCommentLikeNotification`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user who liked to the activity

#### [`ThreadCommentLikeNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`ThreadCommentLikeNotification`.`commentId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity which was liked

#### [`ThreadCommentLikeNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`ThreadCommentLikeNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`ThreadCommentLikeNotification`.`thread`](#)<span className="gqlmd-mdx-bullet">●</span>[`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

The thread that the relevant comment belongs to

#### [`ThreadCommentLikeNotification`.`comment`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadComment`](/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">object</badge>

The thread comment that was liked

#### [`ThreadCommentLikeNotification`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who liked the activity

### Implemented By

[`NotificationUnion`](/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
