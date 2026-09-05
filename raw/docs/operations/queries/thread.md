# Thread

> Thread query

Thread query

```graphql
Thread(
  id: Int
  userId: Int
  replyUserId: Int
  subscribed: Boolean
  categoryId: Int
  mediaCategoryId: Int
  search: String
  id_in: [Int]
  sort: [ThreadSort]
): Thread
```

### Arguments

#### [`Thread`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id

#### [`Thread`.`userId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the thread's creator

#### [`Thread`.`replyUserId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the user id of the last user to comment on the thread

#### [`Thread`.`subscribed`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by if the currently authenticated user's subscribed threads

#### [`Thread`.`categoryId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by thread category id

#### [`Thread`.`mediaCategoryId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by thread media id category

#### [`Thread`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

#### [`Thread`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the thread id (max 10,000 items)

#### [`Thread`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`ThreadSort`](/docs/types/enums/thread-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread
