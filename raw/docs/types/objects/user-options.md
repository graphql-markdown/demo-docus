# UserOptions

> A user's general options

A user's general options

```graphql
type UserOptions {
  titleLanguage: UserTitleLanguage
  displayAdultContent: Boolean
  airingNotifications: Boolean
  profileColor: String
  notificationOptions: [NotificationOption]
  timezone: String
  activityMergeTime: Int
  staffNameLanguage: UserStaffNameLanguage
  restrictMessagesToFollowing: Boolean
  disabledListActivity: [ListActivityOption]
}
```

### Fields

#### [`UserOptions`.`titleLanguage`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserTitleLanguage`](/docs/types/enums/user-title-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The language the user wants to see media titles in

#### [`UserOptions`.`displayAdultContent`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user has enabled viewing of 18+ content

#### [`UserOptions`.`airingNotifications`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user receives notifications when a show they are watching aires

#### [`UserOptions`.`profileColor`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Profile highlight color (blue, purple, pink, orange, red, green, gray)

#### [`UserOptions`.`notificationOptions`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationOption`](/docs/types/objects/notification-option) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification options

#### [`UserOptions`.`timezone`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's timezone offset (Auth user only)

#### [`UserOptions`.`activityMergeTime`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.

#### [`UserOptions`.`staffNameLanguage`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStaffNameLanguage`](/docs/types/enums/user-staff-name-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The language the user wants to see staff and character names in

#### [`UserOptions`.`restrictMessagesToFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user only allow messages from users they follow

#### [`UserOptions`.`disabledListActivity`](#)<span className="gqlmd-mdx-bullet">●</span>[`ListActivityOption`](/docs/types/objects/list-activity-option) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The list activity types the user has disabled from being created from list updates

### Member Of

[`User`](/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
