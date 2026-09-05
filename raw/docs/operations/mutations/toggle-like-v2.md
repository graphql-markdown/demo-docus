# ToggleLikeV2

> Add or remove a like from a likeable type.

Add or remove a like from a likeable type.

```graphql
ToggleLikeV2(
  id: Int
  type: LikeableType
): LikeableUnion
```

### Arguments

#### [`ToggleLikeV2`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the likeable type

#### [`ToggleLikeV2`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`LikeableType`](/docs/types/enums/likeable-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The type of model to be un/liked

### Type

#### [`LikeableUnion`](/docs/types/unions/likeable-union) <badge color="neutral" size="sm" variant="subtle">union</badge>

Likeable union type
