# User

> A user

A user

```graphql
type User {
  id: Int!
  name: String!
  about(
    asHtml: Boolean
  ): String
  avatar: UserAvatar
  bannerImage: String
  isFollowing: Boolean
  isFollower: Boolean
  isBlocked: Boolean
  bans: Json
  options: UserOptions
  mediaListOptions: MediaListOptions
  favourites(
    page: Int
  ): Favourites
  statistics: UserStatisticTypes
  unreadNotificationCount: Int
  siteUrl: String
  donatorTier: Int
  donatorBadge: String
  moderatorRoles: [ModRole]
  createdAt: Int
  updatedAt: Int
  stats: UserStats @deprecated
  moderatorStatus: String @deprecated
  previousNames: [UserPreviousName]
}
```

### Fields

#### [`User`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user

#### [`User`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name of the user

#### [`User`.`about`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The bio written by user (Markdown)

##### [`User.about`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`User`.`avatar`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserAvatar`](/docs/types/objects/user-avatar) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's avatar images

#### [`User`.`bannerImage`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's banner images

#### [`User`.`isFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the authenticated user if following this user

#### [`User`.`isFollower`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If this user if following the authenticated user

#### [`User`.`isBlocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the user is blocked by the authenticated user

#### [`User`.`bans`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

List of active bans. Mod-only

#### [`User`.`options`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserOptions`](/docs/types/objects/user-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's general options

#### [`User`.`mediaListOptions`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListOptions`](/docs/types/objects/media-list-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's media list options

#### [`User`.`favourites`](#)<span className="gqlmd-mdx-bullet">●</span>[`Favourites`](/docs/types/objects/favourites) <badge color="neutral" size="sm" variant="subtle">object</badge>

The users favourites

##### [`User.favourites`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Deprecated. Use page arguments on each favourite field instead.

#### [`User`.`statistics`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticTypes`](/docs/types/objects/user-statistic-types) <badge color="neutral" size="sm" variant="subtle">object</badge>

The users anime & manga list statistics

#### [`User`.`unreadNotificationCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of unread notifications the user has

#### [`User`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the user page on the AniList website

#### [`User`.`donatorTier`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The donation tier of the user

#### [`User`.`donatorBadge`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Custom donation badge text

#### [`User`.`moderatorRoles`](#)<span className="gqlmd-mdx-bullet">●</span>[`ModRole`](/docs/types/enums/mod-role) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The user's moderator roles if they are a site moderator

#### [`User`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the user's account was created. (Does not exist for accounts created before 2020)

#### [`User`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the user's data was last updated

#### [`User`.`stats`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStats`](/docs/types/objects/user-stats) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Deprecated. Replaced with statistics field.

</accordion-item>
</accordion>

The user's statistics

#### [`User`.`moderatorStatus`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Deprecated. Replaced with moderatorRoles field.

</accordion-item>
</accordion>

If the user is a moderator or data moderator

#### [`User`.`previousNames`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserPreviousName`](/docs/types/objects/user-previous-name) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's previously used names.

### Returned By

[`Follower`](/docs/operations/queries/follower)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Following`](/docs/operations/queries/following)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Like`](/docs/operations/queries/like)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ToggleFollow`](/docs/operations/mutations/toggle-follow)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ToggleLike`](/docs/operations/mutations/toggle-like)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UpdateUser`](/docs/operations/mutations/update-user)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`User`](/docs/operations/queries/user)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Viewer`](/docs/operations/queries/viewer)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`ActivityLikeNotification`](/docs/types/objects/activity-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityMentionNotification`](/docs/types/objects/activity-mention-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityMessageNotification`](/docs/types/objects/activity-message-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReply`](/docs/types/objects/activity-reply)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReplyLikeNotification`](/docs/types/objects/activity-reply-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReplyNotification`](/docs/types/objects/activity-reply-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReplySubscribedNotification`](/docs/types/objects/activity-reply-subscribed-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`AniChartUser`](/docs/types/objects/ani-chart-user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`CharacterSubmission`](/docs/types/objects/character-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`FollowingNotification`](/docs/types/objects/following-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ListActivity`](/docs/types/objects/list-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaList`](/docs/types/objects/media-list)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaListCollection`](/docs/types/objects/media-list-collection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmission`](/docs/types/objects/media-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MessageActivity`](/docs/types/objects/message-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ModAction`](/docs/types/objects/mod-action)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Recommendation`](/docs/types/objects/recommendation)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Report`](/docs/types/objects/report)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Review`](/docs/types/objects/review)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RevisionHistory`](/docs/types/objects/revision-history)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Staff`](/docs/types/objects/staff)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffSubmission`](/docs/types/objects/staff-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`TextActivity`](/docs/types/objects/text-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Thread`](/docs/types/objects/thread)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadComment`](/docs/types/objects/thread-comment)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentLikeNotification`](/docs/types/objects/thread-comment-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentMentionNotification`](/docs/types/objects/thread-comment-mention-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentReplyNotification`](/docs/types/objects/thread-comment-reply-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentSubscribedNotification`](/docs/types/objects/thread-comment-subscribed-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadLikeNotification`](/docs/types/objects/thread-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserModData`](/docs/types/objects/user-mod-data)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
