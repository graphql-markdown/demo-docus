# Like

> Like query

Like query

```graphql
Like(
  likeableId: Int
  type: LikeableType
): User
```

### Arguments

#### [`Like`.`likeableId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the likeable type

#### [`Like`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`LikeableType`](/docs/types/enums/likeable-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of model the id applies to

### Type

#### [`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

A user
