# StaffSubmissionUpdateNotification

> Notification for when a staff submission is accepted, partially accepted, or rejected

Notification for when a staff submission is accepted, partially accepted, or rejected

```graphql
type StaffSubmissionUpdateNotification {
  id: Int!
  type: NotificationType
  contexts: [String]
  status: String
  notes: String
  createdAt: Int
  staff: Staff
}
```

### Fields

#### [`StaffSubmissionUpdateNotification`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the Notification

#### [`StaffSubmissionUpdateNotification`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationType`](/docs/types/enums/notification-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of notification

#### [`StaffSubmissionUpdateNotification`.`contexts`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notification context text

#### [`StaffSubmissionUpdateNotification`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The status of the submission

#### [`StaffSubmissionUpdateNotification`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The notes of the submission

#### [`StaffSubmissionUpdateNotification`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the notification was created at

#### [`StaffSubmissionUpdateNotification`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

The staff that was modified.

### Implemented By

[`NotificationUnion`](/docs/types/unions/notification-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
