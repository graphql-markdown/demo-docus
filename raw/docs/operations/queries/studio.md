# Studio

> Studio query

Studio query

```graphql
Studio(
  id: Int
  search: String
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  sort: [StudioSort]
): Studio
```

### Arguments

#### [`Studio`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id

#### [`Studio`.`search`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by search query

#### [`Studio`.`id_not`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id

#### [`Studio`.`id_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id (max 10,000 items)

#### [`Studio`.`id_not_in`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Filter by the studio id (max 10,000 items)

#### [`Studio`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`StudioSort`](/docs/types/enums/studio-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

The order the results will be returned in

### Type

#### [`Studio`](/docs/types/objects/studio) <badge color="neutral" size="sm" variant="subtle">object</badge>

Animation or production company
