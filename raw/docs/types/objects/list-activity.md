# ListActivity

> User list activity (anime & manga updates)

User list activity (anime & manga updates)

```graphql
type ListActivity {
  id: Int!
  userId: Int
  type: ActivityType
  replyCount: Int!
  status: String
  progress: String
  isLocked: Boolean
  isSubscribed: Boolean
  likeCount: Int!
  isLiked: Boolean
  isPinned: Boolean
  siteUrl: String
  createdAt: Int!
  user: User
  media: Media
  replies: [ActivityReply]
  likes: [User]
}
```

### Fields

#### [`ListActivity`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the activity

#### [`ListActivity`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The user id of the activity's creator

#### [`ListActivity`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityType`](/docs/types/enums/activity-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of activity

#### [`ListActivity`.`replyCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The number of activity replies

#### [`ListActivity`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The list item's textual status

#### [`ListActivity`.`progress`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The list progress made

#### [`ListActivity`.`isLocked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity is locked and can receive replies

#### [`ListActivity`.`isSubscribed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user is subscribed to the activity

#### [`ListActivity`.`likeCount`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of likes the activity has

#### [`ListActivity`.`isLiked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the currently authenticated user liked the activity

#### [`ListActivity`.`isPinned`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity is pinned to the top of the users activity feed

#### [`ListActivity`.`siteUrl`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url for the activity page on the AniList website

#### [`ListActivity`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The time the activity was created at

#### [`ListActivity`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The owner of the activity

#### [`ListActivity`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The associated media to the activity update

#### [`ListActivity`.`replies`](#)<span className="gqlmd-mdx-bullet">●</span>[`ActivityReply`](/docs/types/objects/activity-reply) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The written replies to the activity

#### [`ListActivity`.`likes`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The users who liked the activity

### Returned By

[`SaveListActivity`](/docs/operations/mutations/save-list-activity)  <badge color="neutral" size="sm" variant="subtle">

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
