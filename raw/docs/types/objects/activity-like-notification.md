---
title: "ActivityLikeNotification"
description: "Notification for when a activity is liked"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/activity-like-notification"
---
# ActivityLikeNotification

> Notification for when a activity is liked

Notification for when a activity is liked

```graphql
type ActivityLikeNotification {
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

#### [`ActivityLikeNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`ActivityLikeNotification`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user who liked to the activity

#### [`ActivityLikeNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](https://graphql-markdown.dev/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`ActivityLikeNotification`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity which was liked

#### [`ActivityLikeNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`ActivityLikeNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`ActivityLikeNotification`.`activity`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityUnion`](https://graphql-markdown.dev/docs/types/unions/activity-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

The liked activity

#### [`ActivityLikeNotification`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who liked the activity

### Implemented By

[`NotificationUnion`](https://graphql-markdown.dev/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
