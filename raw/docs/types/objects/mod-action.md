# ModAction

> No description

No description

```graphql
type ModAction {
  id: Int!
  user: User
  mod: User
  type: ModActionType
  objectId: Int
  objectType: String
  data: String
  createdAt: Int!
}
```

### Fields

#### [`ModAction`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the action

#### [`ModAction`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`ModAction`.`mod`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`ModAction`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ModActionType`](/docs/types/enums/mod-action-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`ModAction`.`objectId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`ModAction`.`objectType`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`ModAction`.`data`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`ModAction`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

### Member Of

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
