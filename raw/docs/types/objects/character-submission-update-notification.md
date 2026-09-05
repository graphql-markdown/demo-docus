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

#### [`CharacterSubmissionUpdateNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`CharacterSubmissionUpdateNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`CharacterSubmissionUpdateNotification`.`contexts`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`CharacterSubmissionUpdateNotification`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The status of the submission

#### [`CharacterSubmissionUpdateNotification`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notes of the submission

#### [`CharacterSubmissionUpdateNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`CharacterSubmissionUpdateNotification`.`character`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

The character that was modified.

### Implemented By

[`NotificationUnion`](/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
