---
title: "LegacyProject"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/legacy-project"
---
# LegacyProject

<badge color="warning" size="sm" variant="subtle">

deprecated

</badge>

Use Project instead for active workspace work.

<accordion>
<accordion-item icon="i-lucide-archive" label="Deprecated">

Replaced by [`Project`](https://graphql-markdown.dev/docs/types/objects/project) to support ownership and lifecycle status.

</accordion-item>
</accordion>

```graphql
type LegacyProject {
  id: ID!
  name: String!
}
```

### Fields

#### `LegacyProject`.`id`<span className="gqlmd-mdx-bullet">●</span>[`ID!`](https://graphql-markdown.dev/docs/types/scalars/id) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The unique identifier of the legacy project.

#### `LegacyProject`.`name`<span className="gqlmd-mdx-bullet">●</span>[`String!`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The legacy project name.

### Example

```graphql
{}
```

[View as Markdown](https://graphql-markdown.dev/demo-docus/docs/types/objects/legacy-project.md)


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
