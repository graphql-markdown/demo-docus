# StaffName

> The names of the staff member

The names of the staff member

```graphql
type StaffName {
  first: String
  middle: String
  last: String
  full: String
  native: String
  alternative: [String]
  userPreferred: String
}
```

### Fields

#### [`StaffName`.`first`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's given name

#### [`StaffName`.`middle`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's middle name

#### [`StaffName`.`last`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's surname

#### [`StaffName`.`full`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's first and last name

#### [`StaffName`.`native`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's full name in their native language

#### [`StaffName`.`alternative`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Other names the staff member might be referred to as (pen names)

#### [`StaffName`.`userPreferred`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The currently authenticated users preferred name language. Default romaji for non-authenticated

### Member Of

[`Staff`](/docs/types/objects/staff)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
