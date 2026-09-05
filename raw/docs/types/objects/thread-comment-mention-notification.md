# ThreadCommentMentionNotification

> Notification for when authenticated user is @ mentioned in a forum thread comment

Notification for when authenticated user is @ mentioned in a forum thread comment

```graphql
type ThreadCommentMentionNotification {
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

#### [`ThreadCommentMentionNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`ThreadCommentMentionNotification`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user who mentioned the authenticated user

#### [`ThreadCommentMentionNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`ThreadCommentMentionNotification`.`commentId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the comment where mentioned

#### [`ThreadCommentMentionNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`ThreadCommentMentionNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`ThreadCommentMentionNotification`.`thread`](#)<span className="gqlmd-mdx-bullet">●</span>[`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

The thread that the relevant comment belongs to

#### [`ThreadCommentMentionNotification`.`comment`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadComment`](/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">object</badge>

The thread comment that included the @ mention

#### [`ThreadCommentMentionNotification`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who mentioned the authenticated user

### Implemented By

[`NotificationUnion`](/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
