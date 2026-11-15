---
title: "MediaMergeNotification"
description: "Notification for when a media entry is merged into another for a user who had it on their list"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/media-merge-notification"
---
# MediaMergeNotification

> Notification for when a media entry is merged into another for a user who had it on their list

Notification for when a media entry is merged into another for a user who had it on their list

```graphql
type MediaMergeNotification {
  id: Int!
  type: NotificationType
  mediaId: Int!
  deletedMediaTitles: [String]
  context: String
  reason: String
  createdAt: Int
  media: Media
}
```

### Fields

#### [`MediaMergeNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`MediaMergeNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](https://graphql-markdown.dev/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`MediaMergeNotification`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media that was merged into

#### [`MediaMergeNotification`.`deletedMediaTitles`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The title of the deleted media

#### [`MediaMergeNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The reason for the media data change

#### [`MediaMergeNotification`.`reason`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The reason for the media merge

#### [`MediaMergeNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`MediaMergeNotification`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](https://graphql-markdown.dev/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media that was merged into

### Implemented By

[`NotificationUnion`](https://graphql-markdown.dev/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
