# SaveThreadComment

> Create or update a thread comment

Create or update a thread comment

```graphql
SaveThreadComment(
  id: Int
  threadId: Int
  parentCommentId: Int
  comment: String
  locked: Boolean
): ThreadComment
```

### Arguments

#### [`SaveThreadComment`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The comment id, required for updating

#### [`SaveThreadComment`.`threadId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of thread the comment belongs to

#### [`SaveThreadComment`.`parentCommentId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of thread comment to reply to

#### [`SaveThreadComment`.`comment`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The comment markdown text (Min: 1, Max: 12000)

#### [`SaveThreadComment`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the comment tree should be locked. (Mod Only)

### Type

#### [`ThreadComment`](/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread Comment
