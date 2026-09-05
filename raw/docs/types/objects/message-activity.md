# MessageActivity

> User message activity

User message activity

```graphql
type MessageActivity {
  id: Int!
  recipientId: Int
  messengerId: Int
  type: ActivityType
  replyCount: Int!
  message(
    asHtml: Boolean
  ): String
  isLocked: Boolean
  isSubscribed: Boolean
  likeCount: Int!
  isLiked: Boolean
  isPinned: Boolean
  isPrivate: Boolean
  siteUrl: String
  createdAt: Int!
  recipient: User
  messenger: User
  replies: [ActivityReply]
  likes: [User]
}
```

### Fields

#### [`MessageActivity`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity

#### [`MessageActivity`.`recipientId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user id of the activity's recipient

#### [`MessageActivity`.`messengerId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user id of the activity's sender

#### [`MessageActivity`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of the activity

#### [`MessageActivity`.`replyCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of activity replies

#### [`MessageActivity`.`message`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The message text (Markdown)

##### [`MessageActivity.message`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`MessageActivity`.`isLocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity is locked and can receive replies

#### [`MessageActivity`.`isSubscribed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user is subscribed to the activity

#### [`MessageActivity`.`likeCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of likes the activity has

#### [`MessageActivity`.`isLiked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user liked the activity

#### [`MessageActivity`.`isPinned`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity is pinned to the top of the users activity feed

#### [`MessageActivity`.`isPrivate`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the message is private and only viewable to the sender and recipients

#### [`MessageActivity`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the activity page on the AniList website

#### [`MessageActivity`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the activity was created at

#### [`MessageActivity`.`recipient`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who the activity message was sent to

#### [`MessageActivity`.`messenger`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who sent the activity message

#### [`MessageActivity`.`replies`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityReply`](/docs/types/objects/activity-reply) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The written replies to the activity

#### [`MessageActivity`.`likes`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The users who liked the activity

### Returned By

[`SaveMessageActivity`](/docs/operations/mutations/save-message-activity)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>



### Member Of

[`ActivityMessageNotification`](/docs/types/objects/activity-message-notification)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>



### Implemented By

[`ActivityUnion`](/docs/types/unions/activity-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`LikeableUnion`](/docs/types/unions/likeable-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
