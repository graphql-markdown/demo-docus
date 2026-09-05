# SaveThread

> Create or update a forum thread

Create or update a forum thread

```graphql
SaveThread(
  id: Int
  title: String
  body: String
  categories: [Int]
  mediaCategories: [Int]
  sticky: Boolean
  locked: Boolean
): Thread
```

### Arguments

#### [`SaveThread`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The thread id, required for updating

#### [`SaveThread`.`title`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The title of the thread (Min: 6, Max: 120)

#### [`SaveThread`.`body`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The main text body of the thread (Max: 30000)

#### [`SaveThread`.`categories`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Forum categories the thread should be within

#### [`SaveThread`.`mediaCategories`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Media related to the contents of the thread

#### [`SaveThread`.`sticky`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the thread should be stickied. (Mod Only)

#### [`SaveThread`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the thread should be locked. (Mod Only)

### Type

#### [`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread
