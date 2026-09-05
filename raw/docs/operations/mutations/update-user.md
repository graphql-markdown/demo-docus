# UpdateUser

> No description

No description

```graphql
UpdateUser(
  about: String
  titleLanguage: UserTitleLanguage
  displayAdultContent: Boolean
  airingNotifications: Boolean
  scoreFormat: ScoreFormat
  rowOrder: String
  profileColor: String
  donatorBadge: String
  notificationOptions: [NotificationOptionInput]
  timezone: String
  activityMergeTime: Int
  animeListOptions: MediaListOptionsInput
  mangaListOptions: MediaListOptionsInput
  staffNameLanguage: UserStaffNameLanguage
  restrictMessagesToFollowing: Boolean
  disabledListActivity: [ListActivityOptionInput]
): User
```

### Arguments

#### [`UpdateUser`.`about`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

User's about/bio text

#### [`UpdateUser`.`titleLanguage`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserTitleLanguage`](/docs/types/enums/user-title-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

User's title language

#### [`UpdateUser`.`displayAdultContent`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the user should see media marked as adult-only

#### [`UpdateUser`.`airingNotifications`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the user should get notifications when a show they are watching aires

#### [`UpdateUser`.`scoreFormat`](#)<span className="gqlmd-mdx-bullet">●</span>[`ScoreFormat`](/docs/types/enums/score-format) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The user's list scoring system

#### [`UpdateUser`.`rowOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's default list order

#### [`UpdateUser`.`profileColor`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Profile highlight color

#### [`UpdateUser`.`donatorBadge`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Profile highlight color (Max: 24)

#### [`UpdateUser`.`notificationOptions`](#)<span className="gqlmd-mdx-bullet">●</span>[`NotificationOptionInput`](/docs/types/inputs/notification-option-input) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">input</badge>

Notification options

#### [`UpdateUser`.`timezone`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Timezone offset format: -?HH:MM

#### [`UpdateUser`.`activityMergeTime`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. (Min: 0)

#### [`UpdateUser`.`animeListOptions`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListOptionsInput`](/docs/types/inputs/media-list-options-input) <badge color="neutral" size="sm" variant="subtle">input</badge>

The user's anime list options

#### [`UpdateUser`.`mangaListOptions`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListOptionsInput`](/docs/types/inputs/media-list-options-input) <badge color="neutral" size="sm" variant="subtle">input</badge>

The user's anime list options

#### [`UpdateUser`.`staffNameLanguage`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStaffNameLanguage`](/docs/types/enums/user-staff-name-language) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The language the user wants to see staff and character names in

#### [`UpdateUser`.`restrictMessagesToFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Only allow messages from other users the user follows

#### [`UpdateUser`.`disabledListActivity`](#)<span className="gqlmd-mdx-bullet">●</span>[`ListActivityOptionInput`](/docs/types/inputs/list-activity-option-input) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">input</badge>

### Type

#### [`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

A user
