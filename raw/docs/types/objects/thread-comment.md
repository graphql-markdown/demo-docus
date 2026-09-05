# ThreadComment

> Forum Thread Comment

Forum Thread Comment

```graphql
type ThreadComment {
  id: Int!
  userId: Int
  threadId: Int
  comment(
    asHtml: Boolean
  ): String
  likeCount: Int!
  isLiked: Boolean
  siteUrl: String
  createdAt: Int!
  updatedAt: Int!
  thread: Thread
  user: User
  likes: [User]
  childComments: Json
  isLocked: Boolean
}
```

### Fields

#### [`ThreadComment`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the comment

#### [`ThreadComment`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user id of the comment's owner

#### [`ThreadComment`.`threadId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of thread the comment belongs to

#### [`ThreadComment`.`comment`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The text content of the comment (Markdown)

##### [`ThreadComment.comment`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`ThreadComment`.`likeCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of likes the comment has

#### [`ThreadComment`.`isLiked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user liked the comment

#### [`ThreadComment`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the comment page on the AniList website

#### [`ThreadComment`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time of the comments creation

#### [`ThreadComment`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time of the comments last update

#### [`ThreadComment`.`thread`](#)<span className="gqlmd-mdx-bullet">●</span>[`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

The thread the comment belongs to

#### [`ThreadComment`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who created the comment

#### [`ThreadComment`.`likes`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The users who liked the comment

#### [`ThreadComment`.`childComments`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The comment's child reply comments

#### [`ThreadComment`.`isLocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the comment tree is locked and may not receive replies or edits

### Returned By

[`SaveThreadComment`](/docs/operations/mutations/save-thread-comment)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ThreadComment`](/docs/operations/queries/thread-comment)  <badge color="neutral" size="sm" variant="subtle">

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



### Implemented By

[`LikeableUnion`](/docs/types/unions/likeable-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
