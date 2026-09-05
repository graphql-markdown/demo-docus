# Staff

> Staff query

Staff query

```graphql
Staff(
  id: Int
  isBirthday: Boolean
  search: String
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  sort: [StaffSort]
): Staff
```

### Arguments

#### [`Staff`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id

#### [`Staff`.`isBirthday`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by staff by if its their birthday today

#### [`Staff`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

#### [`Staff`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id

#### [`Staff`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id (max 10,000 items)

#### [`Staff`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the staff id (max 10,000 items)

#### [`Staff`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSort`](/docs/types/enums/staff-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

Voice actors or production staff
