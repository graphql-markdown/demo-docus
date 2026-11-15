---
title: "User"
description: "A user"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/user"
---
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
  privacy: UserPrivacy
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

#### [`User`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user

#### [`User`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The name of the user

#### [`User`.`about`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The bio written by user (Markdown)

##### [`User.about`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`User`.`avatar`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserAvatar`](https://graphql-markdown.dev/docs/types/objects/user-avatar) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's avatar images

#### [`User`.`bannerImage`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user's banner images

#### [`User`.`isFollowing`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the authenticated user if following this user

#### [`User`.`isFollower`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If this user if following the authenticated user

#### [`User`.`isBlocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the user is blocked by the authenticated user

#### [`User`.`bans`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](https://graphql-markdown.dev/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

List of active bans. Mod-only

#### [`User`.`options`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserOptions`](https://graphql-markdown.dev/docs/types/objects/user-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's general options

#### [`User`.`mediaListOptions`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaListOptions`](https://graphql-markdown.dev/docs/types/objects/media-list-options) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's media list options

#### [`User`.`favourites`](#)<span className="gqlmd-mdx-bullet">●</span>[`Favourites`](https://graphql-markdown.dev/docs/types/objects/favourites) <badge color="neutral" size="sm" variant="subtle">object</badge>

The users favourites

##### [`User.favourites`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Deprecated. Use page arguments on each favourite field instead.

#### [`User`.`statistics`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStatisticTypes`](https://graphql-markdown.dev/docs/types/objects/user-statistic-types) <badge color="neutral" size="sm" variant="subtle">object</badge>

The users anime & manga list statistics

#### [`User`.`unreadNotificationCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of unread notifications the user has

#### [`User`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the user page on the AniList website

#### [`User`.`donatorTier`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The donation tier of the user

#### [`User`.`privacy`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserPrivacy`](https://graphql-markdown.dev/docs/types/enums/user-privacy) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The user's account privacy setting

#### [`User`.`donatorBadge`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Custom donation badge text

#### [`User`.`moderatorRoles`](#)<span className="gqlmd-mdx-bullet">●</span>[`ModRole`](https://graphql-markdown.dev/docs/types/enums/mod-role) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The user's moderator roles if they are a site moderator

#### [`User`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the user's account was created. (Does not exist for accounts created before 2020)

#### [`User`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the user's data was last updated

#### [`User`.`stats`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserStats`](https://graphql-markdown.dev/docs/types/objects/user-stats) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Deprecated. Replaced with statistics field.

</accordion-item>
</accordion>

The user's statistics

#### [`User`.`moderatorStatus`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="warning" size="sm" variant="subtle">deprecated</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Deprecated. Replaced with moderatorRoles field.

</accordion-item>
</accordion>

If the user is a moderator or data moderator

#### [`User`.`previousNames`](#)<span className="gqlmd-mdx-bullet">●</span>[`UserPreviousName`](https://graphql-markdown.dev/docs/types/objects/user-previous-name) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The user's previously used names.

### Returned By

[`DeleteFollower`](https://graphql-markdown.dev/docs/operations/mutations/delete-follower)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Follower`](https://graphql-markdown.dev/docs/operations/queries/follower)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Following`](https://graphql-markdown.dev/docs/operations/queries/following)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Like`](https://graphql-markdown.dev/docs/operations/queries/like)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MutualFollower`](https://graphql-markdown.dev/docs/operations/queries/mutual-follower)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ToggleFollow`](https://graphql-markdown.dev/docs/operations/mutations/toggle-follow)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ToggleLike`](https://graphql-markdown.dev/docs/operations/mutations/toggle-like)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UpdateUser`](https://graphql-markdown.dev/docs/operations/mutations/update-user)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`User`](https://graphql-markdown.dev/docs/operations/queries/user)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Viewer`](https://graphql-markdown.dev/docs/operations/queries/viewer)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`ActivityLikeNotification`](https://graphql-markdown.dev/docs/types/objects/activity-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityMentionNotification`](https://graphql-markdown.dev/docs/types/objects/activity-mention-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityMessageNotification`](https://graphql-markdown.dev/docs/types/objects/activity-message-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReply`](https://graphql-markdown.dev/docs/types/objects/activity-reply)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReplyLikeNotification`](https://graphql-markdown.dev/docs/types/objects/activity-reply-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReplyNotification`](https://graphql-markdown.dev/docs/types/objects/activity-reply-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ActivityReplySubscribedNotification`](https://graphql-markdown.dev/docs/types/objects/activity-reply-subscribed-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`AniChartUser`](https://graphql-markdown.dev/docs/types/objects/ani-chart-user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`CharacterSubmission`](https://graphql-markdown.dev/docs/types/objects/character-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`FollowingNotification`](https://graphql-markdown.dev/docs/types/objects/following-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ListActivity`](https://graphql-markdown.dev/docs/types/objects/list-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaList`](https://graphql-markdown.dev/docs/types/objects/media-list)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaListCollection`](https://graphql-markdown.dev/docs/types/objects/media-list-collection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmission`](https://graphql-markdown.dev/docs/types/objects/media-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MessageActivity`](https://graphql-markdown.dev/docs/types/objects/message-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ModAction`](https://graphql-markdown.dev/docs/types/objects/mod-action)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](https://graphql-markdown.dev/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Recommendation`](https://graphql-markdown.dev/docs/types/objects/recommendation)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Report`](https://graphql-markdown.dev/docs/types/objects/report)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Review`](https://graphql-markdown.dev/docs/types/objects/review)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RevisionHistory`](https://graphql-markdown.dev/docs/types/objects/revision-history)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Staff`](https://graphql-markdown.dev/docs/types/objects/staff)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffSubmission`](https://graphql-markdown.dev/docs/types/objects/staff-submission)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`TextActivity`](https://graphql-markdown.dev/docs/types/objects/text-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Thread`](https://graphql-markdown.dev/docs/types/objects/thread)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadComment`](https://graphql-markdown.dev/docs/types/objects/thread-comment)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentLikeNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentMentionNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-mention-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentReplyNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-reply-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadCommentSubscribedNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-subscribed-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadLikeNotification`](https://graphql-markdown.dev/docs/types/objects/thread-like-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserModData`](https://graphql-markdown.dev/docs/types/objects/user-mod-data)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
