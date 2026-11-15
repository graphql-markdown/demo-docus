---
title: "NotificationType"
description: "Notification type enum"
canonical_url: "https://graphql-markdown.dev/docs/types/enums/notification-type"
---
# NotificationType

> Notification type enum

Notification type enum

```graphql
enum NotificationType {
  ACTIVITY_MESSAGE
  ACTIVITY_REPLY
  FOLLOWING
  ACTIVITY_MENTION
  THREAD_COMMENT_MENTION
  THREAD_SUBSCRIBED
  THREAD_COMMENT_REPLY
  AIRING
  ACTIVITY_LIKE
  ACTIVITY_REPLY_LIKE
  THREAD_LIKE
  THREAD_COMMENT_LIKE
  ACTIVITY_REPLY_SUBSCRIBED
  RELATED_MEDIA_ADDITION
  MEDIA_DATA_CHANGE
  MEDIA_MERGE
  MEDIA_DELETION
  MEDIA_SUBMISSION_UPDATE
  STAFF_SUBMISSION_UPDATE
  CHARACTER_SUBMISSION_UPDATE
}
```

### Values

#### [`NotificationType`.`ACTIVITY_MESSAGE`](#)

A user has sent you message

#### [`NotificationType`.`ACTIVITY_REPLY`](#)

A user has replied to your activity

#### [`NotificationType`.`FOLLOWING`](#)

A user has followed you

#### [`NotificationType`.`ACTIVITY_MENTION`](#)

A user has mentioned you in their activity

#### [`NotificationType`.`THREAD_COMMENT_MENTION`](#)

A user has mentioned you in a forum comment

#### [`NotificationType`.`THREAD_SUBSCRIBED`](#)

A user has commented in one of your subscribed forum threads

#### [`NotificationType`.`THREAD_COMMENT_REPLY`](#)

A user has replied to your forum comment

#### [`NotificationType`.`AIRING`](#)

An anime you are currently watching has aired

#### [`NotificationType`.`ACTIVITY_LIKE`](#)

A user has liked your activity

#### [`NotificationType`.`ACTIVITY_REPLY_LIKE`](#)

A user has liked your activity reply

#### [`NotificationType`.`THREAD_LIKE`](#)

A user has liked your forum thread

#### [`NotificationType`.`THREAD_COMMENT_LIKE`](#)

A user has liked your forum comment

#### [`NotificationType`.`ACTIVITY_REPLY_SUBSCRIBED`](#)

A user has replied to activity you have also replied to

#### [`NotificationType`.`RELATED_MEDIA_ADDITION`](#)

A new anime or manga has been added to the site where its related media is on the user's list

#### [`NotificationType`.`MEDIA_DATA_CHANGE`](#)

An anime or manga has had a data change that affects how a user may track it in their lists

#### [`NotificationType`.`MEDIA_MERGE`](#)

Anime or manga entries on the user's list have been merged into a single entry

#### [`NotificationType`.`MEDIA_DELETION`](#)

An anime or manga on the user's list has been deleted from the site

#### [`NotificationType`.`MEDIA_SUBMISSION_UPDATE`](#)

A user's submission has been accepted, partially accepted, or rejected

#### [`NotificationType`.`STAFF_SUBMISSION_UPDATE`](#)

A user's staff submission has been accepted, partially accepted, or rejected

#### [`NotificationType`.`CHARACTER_SUBMISSION_UPDATE`](#)

A user's character submission has been accepted, partially accepted, or rejected

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

[`AiringNotification`](https://graphql-markdown.dev/docs/types/objects/airing-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`CharacterSubmissionUpdateNotification`](https://graphql-markdown.dev/docs/types/objects/character-submission-update-notification)  <badge color="neutral" size="sm" variant="subtle">

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

[`MediaDataChangeNotification`](https://graphql-markdown.dev/docs/types/objects/media-data-change-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaDeletionNotification`](https://graphql-markdown.dev/docs/types/objects/media-deletion-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaMergeNotification`](https://graphql-markdown.dev/docs/types/objects/media-merge-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmissionUpdateNotification`](https://graphql-markdown.dev/docs/types/objects/media-submission-update-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Notification`](https://graphql-markdown.dev/docs/operations/queries/notification)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`NotificationOption`](https://graphql-markdown.dev/docs/types/objects/notification-option)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`NotificationOptionInput`](https://graphql-markdown.dev/docs/types/inputs/notification-option-input)  <badge color="neutral" size="sm" variant="subtle">

input

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RelatedMediaAdditionNotification`](https://graphql-markdown.dev/docs/types/objects/related-media-addition-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`StaffSubmissionUpdateNotification`](https://graphql-markdown.dev/docs/types/objects/staff-submission-update-notification)  <badge color="neutral" size="sm" variant="subtle">

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


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
