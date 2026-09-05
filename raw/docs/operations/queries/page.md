# Page

> No description

No description

```graphql
Page(
  page: Int
  perPage: Int
): Page
```

### Arguments

#### [`Page`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page number

#### [`Page`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 50

### Type

#### [`Page`](/docs/types/objects/page) <badge color="neutral" size="sm" variant="subtle">object</badge>

Page of data. Limited to a max depth of 5000 entries. This is calculated as the page parameter multiplied by the perPage parameter.
