# ActivityReply

> Replay to an activity item

Replay to an activity item

```graphql
type ActivityReply {
  id: Int!
  userId: Int
  activityId: Int
  text(
    asHtml: Boolean
  ): String
  likeCount: Int!
  isLiked: Boolean
  createdAt: Int!
  user: User
  likes: [User]
}
```

### Fields

#### [`ActivityReply`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the reply

#### [`ActivityReply`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the replies creator

#### [`ActivityReply`.`activityId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the parent activity

#### [`ActivityReply`.`text`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The reply text

##### [`ActivityReply.text`.`asHtml`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Return the string in pre-parsed html instead of markdown

#### [`ActivityReply`.`likeCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of likes the reply has

#### [`ActivityReply`.`isLiked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user liked the reply

#### [`ActivityReply`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the reply was created at

#### [`ActivityReply`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who created reply

#### [`ActivityReply`.`likes`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The users who liked the reply

### Returned By

[`ActivityReply`](/docs/operations/queries/activity-reply)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`SaveActivityReply`](/docs/operations/mutations/save-activity-reply)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>



### Member Of

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

[`MessageActivity`](/docs/types/objects/message-activity)  <badge color="neutral" size="sm" variant="subtle">

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

[`TextActivity`](/docs/types/objects/text-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>



### Implemented By

[`LikeableUnion`](/docs/types/unions/likeable-union)  <badge color="neutral" size="sm" variant="subtle">

union

</badge>
