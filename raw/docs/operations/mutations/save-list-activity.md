---
title: "SaveListActivity"
description: "Update list activity (Mod Only)"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/save-list-activity"
---
# SaveListActivity

> Update list activity (Mod Only)

Update list activity (Mod Only)

```graphql
SaveListActivity(
  id: Int
  locked: Boolean
): ListActivity
```

### Arguments

#### [`SaveListActivity`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The activity's id, required for updating

#### [`SaveListActivity`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity should be locked. (Mod Only)

### Type

#### [`ListActivity`](https://graphql-markdown.dev/docs/types/objects/list-activity) <badge color="neutral" size="sm" variant="subtle">object</badge>

User list activity (anime & manga updates)


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
