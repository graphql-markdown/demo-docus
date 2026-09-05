# skip

> Directs the executor to skip this field or fragment when the if argument is true.

Directs the executor to skip this field or fragment when the `if` argument is true.

```graphql
directive @skip(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```

### Arguments

#### [`skip`.`if`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean!`](/docs/types/scalars/boolean) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Skipped when true.
