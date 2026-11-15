---
title: "StaffRoleType"
description: "Voice actor role for a character"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/staff-role-type"
---
# StaffRoleType

> Voice actor role for a character

Voice actor role for a character

```graphql
type StaffRoleType {
  voiceActor: Staff
  roleNotes: String
  dubGroup: String
}
```

### Fields

#### [`StaffRoleType`.`voiceActor`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](https://graphql-markdown.dev/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character

#### [`StaffRoleType`.`roleNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Notes regarding the VA's role for the character

#### [`StaffRoleType`.`dubGroup`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.

### Member Of

[`CharacterEdge`](https://graphql-markdown.dev/docs/types/objects/character-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaEdge`](https://graphql-markdown.dev/docs/types/objects/media-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
