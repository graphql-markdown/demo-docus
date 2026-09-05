# SaveTextActivity

> Create or update text activity for the currently authenticated user

Create or update text activity for the currently authenticated user

```graphql
SaveTextActivity(
  id: Int
  text: String
  locked: Boolean
): TextActivity
```

### Arguments

#### [`SaveTextActivity`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The activity's id, required for updating

#### [`SaveTextActivity`.`text`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The activity text (Min: 5, Max: 10000)

#### [`SaveTextActivity`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity should be locked. (Mod Only)

### Type

#### [`TextActivity`](/docs/types/objects/text-activity) <badge color="neutral" size="sm" variant="subtle">object</badge>

User text activity
