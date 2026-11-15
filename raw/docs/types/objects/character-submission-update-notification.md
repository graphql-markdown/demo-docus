---
title: "CharacterSubmissionUpdateNotification"
description: "Notification for when a character submission is accepted, partially accepted, or rejected"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/character-submission-update-notification"
---
# CharacterSubmissionUpdateNotification

> Notification for when a character submission is accepted, partially accepted, or rejected

Notification for when a character submission is accepted, partially accepted, or rejected

```graphql
type CharacterSubmissionUpdateNotification {
  id: Int!
  type: NotificationType
  contexts: [String]
  status: String
  notes: String
  createdAt: Int
  character: Character
}
```

### Fields

#### [`CharacterSubmissionUpdateNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`CharacterSubmissionUpdateNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](https://graphql-markdown.dev/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`CharacterSubmissionUpdateNotification`.`contexts`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`CharacterSubmissionUpdateNotification`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The status of the submission

#### [`CharacterSubmissionUpdateNotification`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notes of the submission

#### [`CharacterSubmissionUpdateNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`CharacterSubmissionUpdateNotification`.`character`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](https://graphql-markdown.dev/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

The character that was modified.

### Implemented By

[`NotificationUnion`](https://graphql-markdown.dev/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
