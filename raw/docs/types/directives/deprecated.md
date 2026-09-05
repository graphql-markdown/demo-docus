# deprecated

> Marks an element of a GraphQL schema as no longer supported.

Marks an element of a GraphQL schema as no longer supported.

```graphql
directive @deprecated(
  reason: String = "No longer supported"
) on 
  | FIELD_DEFINITION
  | ENUM_VALUE
```

### Arguments

#### [`deprecated`.`reason`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted in [Markdown](https://daringfireball.net/projects/markdown/).
