---
title: "NotificationUnion"
description: "Notification union type"
canonical_url: "https://graphql-markdown.dev/docs/types/unions/notification-union"
---
# NotificationUnion

> Notification union type

Notification union type

```graphql
union NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification | MediaSubmissionUpdateNotification | StaffSubmissionUpdateNotification | CharacterSubmissionUpdateNotification
```

### Possible types

#### [`NotificationUnion`.`AiringNotification`](https://graphql-markdown.dev/docs/types/objects/airing-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when an episode of anime airs

#### [`NotificationUnion`.`FollowingNotification`](https://graphql-markdown.dev/docs/types/objects/following-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when the authenticated user is followed by another user

#### [`NotificationUnion`.`ActivityMessageNotification`](https://graphql-markdown.dev/docs/types/objects/activity-message-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user is send an activity message

#### [`NotificationUnion`.`ActivityMentionNotification`](https://graphql-markdown.dev/docs/types/objects/activity-mention-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when authenticated user is @ mentioned in activity or reply

#### [`NotificationUnion`.`ActivityReplyNotification`](https://graphql-markdown.dev/docs/types/objects/activity-reply-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to the authenticated users activity

#### [`NotificationUnion`.`ActivityReplySubscribedNotification`](https://graphql-markdown.dev/docs/types/objects/activity-reply-subscribed-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to activity the authenticated user has replied to

#### [`NotificationUnion`.`ActivityLikeNotification`](https://graphql-markdown.dev/docs/types/objects/activity-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a activity is liked

#### [`NotificationUnion`.`ActivityReplyLikeNotification`](https://graphql-markdown.dev/docs/types/objects/activity-reply-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a activity reply is liked

#### [`NotificationUnion`.`ThreadCommentMentionNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-mention-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when authenticated user is @ mentioned in a forum thread comment

#### [`NotificationUnion`.`ThreadCommentReplyNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-reply-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to your forum thread comment

#### [`NotificationUnion`.`ThreadCommentSubscribedNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-subscribed-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to a subscribed forum thread

#### [`NotificationUnion`.`ThreadCommentLikeNotification`](https://graphql-markdown.dev/docs/types/objects/thread-comment-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a thread comment is liked

#### [`NotificationUnion`.`ThreadLikeNotification`](https://graphql-markdown.dev/docs/types/objects/thread-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a thread is liked

#### [`NotificationUnion`.`RelatedMediaAdditionNotification`](https://graphql-markdown.dev/docs/types/objects/related-media-addition-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when new media is added to the site

#### [`NotificationUnion`.`MediaDataChangeNotification`](https://graphql-markdown.dev/docs/types/objects/media-data-change-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media entry's data was changed in a significant way impacting users' list tracking

#### [`NotificationUnion`.`MediaMergeNotification`](https://graphql-markdown.dev/docs/types/objects/media-merge-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media entry is merged into another for a user who had it on their list

#### [`NotificationUnion`.`MediaDeletionNotification`](https://graphql-markdown.dev/docs/types/objects/media-deletion-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media tracked in a user's list is deleted from the site

#### [`NotificationUnion`.`MediaSubmissionUpdateNotification`](https://graphql-markdown.dev/docs/types/objects/media-submission-update-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media submission is accepted, partially accepted, or rejected

#### [`NotificationUnion`.`StaffSubmissionUpdateNotification`](https://graphql-markdown.dev/docs/types/objects/staff-submission-update-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a staff submission is accepted, partially accepted, or rejected

#### [`NotificationUnion`.`CharacterSubmissionUpdateNotification`](https://graphql-markdown.dev/docs/types/objects/character-submission-update-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a character submission is accepted, partially accepted, or rejected

### Returned By

[`Notification`](https://graphql-markdown.dev/docs/operations/queries/notification)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](https://graphql-markdown.dev/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
