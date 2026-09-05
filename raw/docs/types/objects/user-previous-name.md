# UserPreviousName

> A user's previous name

A user's previous name

```graphql
type UserPreviousName {
  name: String
  createdAt: Int
  updatedAt: Int
}
```

### Fields

#### [`UserPreviousName`.`name`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A previous name of the user.

#### [`UserPreviousName`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the user first changed from this name.

#### [`UserPreviousName`.`updatedAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the user most recently changed from this name.

### Member Of

[`User`](/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
