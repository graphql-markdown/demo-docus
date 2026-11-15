---
title: "UserOptions"
description: "A user's general options"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/user-options"
---
# UserOptions

> A user's general options

A user's general options

```graphql
type UserOptions {
  titleLanguage: UserTitleLanguage
  displayAdultContent: Boolean
  includeAdultContentInSearch: Boolean
  includeAdultContentInQuickSearch: Boolean
  displayAdultActivities: Boolean
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

#### [`UserOptions`.`titleLanguage`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserTitleLanguage`](https://graphql-markdown.dev/docs/types/enums/user-title-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The language the user wants to see media titles in

#### [`UserOptions`.`displayAdultContent`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user has enabled viewing of 18+ content

#### [`UserOptions`.`includeAdultContentInSearch`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user wants to see adult media in search results by default. Sub-option of displayAdultContent

#### [`UserOptions`.`includeAdultContentInQuickSearch`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user wants to see adult media in quick search results by default. Sub-option of displayAdultContent

#### [`UserOptions`.`displayAdultActivities`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user wants to see others' activities for adult media. Sub-option of displayAdultContent

#### [`UserOptions`.`airingNotifications`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user receives notifications when a show they are watching aires

#### [`UserOptions`.`profileColor`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Profile highlight color (blue, purple, pink, orange, red, green, gray)

#### [`UserOptions`.`notificationOptions`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationOption`](https://graphql-markdown.dev/docs/types/objects/notification-option) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification options

#### [`UserOptions`.`timezone`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's timezone offset (Auth user only)

#### [`UserOptions`.`activityMergeTime`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.

#### [`UserOptions`.`staffNameLanguage`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStaffNameLanguage`](https://graphql-markdown.dev/docs/types/enums/user-staff-name-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The language the user wants to see staff and character names in

#### [`UserOptions`.`restrictMessagesToFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the user only allow messages from users they follow

#### [`UserOptions`.`disabledListActivity`](#)<span className="gqlmd-mdx-bullet">●</span>[`ListActivityOption`](https://graphql-markdown.dev/docs/types/objects/list-activity-option) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The list activity types the user has disabled from being created from list updates

### Member Of

[`User`](https://graphql-markdown.dev/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
