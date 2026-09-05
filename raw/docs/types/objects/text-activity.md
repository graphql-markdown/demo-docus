# TextActivity

> User text activity

User text activity

```graphql
type TextActivity {
  id: Int!
  userId: Int
  type: ActivityType
  replyCount: Int!
  text(
    asHtml: Boolean
  ): String
  siteUrl: String
  isLocked: Boolean
  isSubscribed: Boolean
  likeCount: Int!
  isLiked: Boolean
  isPinned: Boolean
  createdAt: Int!
  user: User
  replies: [ActivityReply]
  likes: [User]
}
```

### Fields

#### [`TextActivity`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity

#### [`TextActivity`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user id of the activity's creator

#### [`TextActivity`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of activity

#### [`TextActivity`.`replyCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of activity replies

#### [`TextActivity`.`text`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The status text (Markdown)

##### [`TextActivity.text`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`TextActivity`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the activity page on the AniList website

#### [`TextActivity`.`isLocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity is locked and can receive replies

#### [`TextActivity`.`isSubscribed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user is subscribed to the activity

#### [`TextActivity`.`likeCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of likes the activity has

#### [`TextActivity`.`isLiked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user liked the activity

#### [`TextActivity`.`isPinned`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity is pinned to the top of the users activity feed

#### [`TextActivity`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the activity was created at

#### [`TextActivity`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who created the activity

#### [`TextActivity`.`replies`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityReply`](/docs/types/objects/activity-reply) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The written replies to the activity

#### [`TextActivity`.`likes`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The users who liked the activity

### Returned By

[`SaveTextActivity`](/docs/operations/mutations/save-text-activity)  <badge color="neutral" size="sm" variant="subtle">

mutation

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
