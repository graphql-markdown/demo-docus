---
title: "ThreadCommentSubscribedNotification"
description: "Notification for when a user replies to a subscribed forum thread"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/thread-comment-subscribed-notification"
---
# ThreadCommentSubscribedNotification

> Notification for when a user replies to a subscribed forum thread

Notification for when a user replies to a subscribed forum thread

```graphql
type ThreadCommentSubscribedNotification {
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

#### [`ThreadCommentSubscribedNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`ThreadCommentSubscribedNotification`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user who commented on the thread

#### [`ThreadCommentSubscribedNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](https://graphql-markdown.dev/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`ThreadCommentSubscribedNotification`.`commentId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the new comment in the subscribed thread

#### [`ThreadCommentSubscribedNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`ThreadCommentSubscribedNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`ThreadCommentSubscribedNotification`.`thread`](#)<span className="gqlmd-mdx-bullet">●</span>[`Thread`](https://graphql-markdown.dev/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

The thread that the relevant comment belongs to

#### [`ThreadCommentSubscribedNotification`.`comment`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadComment`](https://graphql-markdown.dev/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">object</badge>

The reply thread comment

#### [`ThreadCommentSubscribedNotification`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who replied to the subscribed thread

### Implemented By

[`NotificationUnion`](https://graphql-markdown.dev/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
