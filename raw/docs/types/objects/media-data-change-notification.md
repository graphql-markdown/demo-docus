---
title: "MediaDataChangeNotification"
description: "Notification for when a media entry's data was changed in a significant way impacting users' list tracking"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/media-data-change-notification"
---
# MediaDataChangeNotification

> Notification for when a media entry's data was changed in a significant way impacting users' list tracking

Notification for when a media entry's data was changed in a significant way impacting users' list tracking

```graphql
type MediaDataChangeNotification {
  id: Int!
  type: NotificationType
  mediaId: Int!
  context: String
  reason: String
  createdAt: Int
  media: Media
}
```

### Fields

#### [`MediaDataChangeNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`MediaDataChangeNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](https://graphql-markdown.dev/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`MediaDataChangeNotification`.`mediaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media that received data changes

#### [`MediaDataChangeNotification`.`context`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The reason for the media data change

#### [`MediaDataChangeNotification`.`reason`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The reason for the media data change

#### [`MediaDataChangeNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`MediaDataChangeNotification`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](https://graphql-markdown.dev/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media that received data changes

### Implemented By

[`NotificationUnion`](https://graphql-markdown.dev/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
