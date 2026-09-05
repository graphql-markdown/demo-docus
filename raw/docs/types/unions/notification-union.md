# NotificationUnion

> Notification union type

Notification union type

```graphql
union NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification | MediaSubmissionUpdateNotification | StaffSubmissionUpdateNotification | CharacterSubmissionUpdateNotification
```

### Possible types

#### [`NotificationUnion`.`AiringNotification`](/docs/types/objects/airing-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when an episode of anime airs

#### [`NotificationUnion`.`FollowingNotification`](/docs/types/objects/following-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when the authenticated user is followed by another user

#### [`NotificationUnion`.`ActivityMessageNotification`](/docs/types/objects/activity-message-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user is send an activity message

#### [`NotificationUnion`.`ActivityMentionNotification`](/docs/types/objects/activity-mention-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when authenticated user is @ mentioned in activity or reply

#### [`NotificationUnion`.`ActivityReplyNotification`](/docs/types/objects/activity-reply-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to the authenticated users activity

#### [`NotificationUnion`.`ActivityReplySubscribedNotification`](/docs/types/objects/activity-reply-subscribed-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to activity the authenticated user has replied to

#### [`NotificationUnion`.`ActivityLikeNotification`](/docs/types/objects/activity-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a activity is liked

#### [`NotificationUnion`.`ActivityReplyLikeNotification`](/docs/types/objects/activity-reply-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a activity reply is liked

#### [`NotificationUnion`.`ThreadCommentMentionNotification`](/docs/types/objects/thread-comment-mention-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when authenticated user is @ mentioned in a forum thread comment

#### [`NotificationUnion`.`ThreadCommentReplyNotification`](/docs/types/objects/thread-comment-reply-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to your forum thread comment

#### [`NotificationUnion`.`ThreadCommentSubscribedNotification`](/docs/types/objects/thread-comment-subscribed-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a user replies to a subscribed forum thread

#### [`NotificationUnion`.`ThreadCommentLikeNotification`](/docs/types/objects/thread-comment-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a thread comment is liked

#### [`NotificationUnion`.`ThreadLikeNotification`](/docs/types/objects/thread-like-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a thread is liked

#### [`NotificationUnion`.`RelatedMediaAdditionNotification`](/docs/types/objects/related-media-addition-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when new media is added to the site

#### [`NotificationUnion`.`MediaDataChangeNotification`](/docs/types/objects/media-data-change-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media entry's data was changed in a significant way impacting users' list tracking

#### [`NotificationUnion`.`MediaMergeNotification`](/docs/types/objects/media-merge-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media entry is merged into another for a user who had it on their list

#### [`NotificationUnion`.`MediaDeletionNotification`](/docs/types/objects/media-deletion-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media tracked in a user's list is deleted from the site

#### [`NotificationUnion`.`MediaSubmissionUpdateNotification`](/docs/types/objects/media-submission-update-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a media submission is accepted, partially accepted, or rejected

#### [`NotificationUnion`.`StaffSubmissionUpdateNotification`](/docs/types/objects/staff-submission-update-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a staff submission is accepted, partially accepted, or rejected

#### [`NotificationUnion`.`CharacterSubmissionUpdateNotification`](/docs/types/objects/character-submission-update-notification) <badge color="neutral" size="sm" variant="subtle">object</badge>

Notification for when a character submission is accepted, partially accepted, or rejected

### Returned By

[`Notification`](/docs/operations/queries/notification)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Page`](/docs/types/objects/page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
