# StaffNameInput

> The names of the staff member

The names of the staff member

```graphql
input StaffNameInput {
  first: String
  middle: String
  last: String
  native: String
  alternative: [String]
}
```

### Fields

#### [`StaffNameInput`.`first`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's given name

#### [`StaffNameInput`.`middle`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's middle name

#### [`StaffNameInput`.`last`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's surname

#### [`StaffNameInput`.`native`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The person's full name in their native language

#### [`StaffNameInput`.`alternative`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Other names the character might be referred by
