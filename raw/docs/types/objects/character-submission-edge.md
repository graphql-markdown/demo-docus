---
title: "CharacterSubmissionEdge"
description: "CharacterSubmission connection edge"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/character-submission-edge"
---
# CharacterSubmissionEdge

> CharacterSubmission connection edge

CharacterSubmission connection edge

```graphql
type CharacterSubmissionEdge {
  node: CharacterSubmission
  role: CharacterRole
  voiceActors: [Staff]
  submittedVoiceActors: [StaffSubmission]
}
```

### Fields

#### [`CharacterSubmissionEdge`.`node`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterSubmission`](https://graphql-markdown.dev/docs/types/objects/character-submission) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`CharacterSubmissionEdge`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterRole`](https://graphql-markdown.dev/docs/types/enums/character-role) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The characters role in the media

#### [`CharacterSubmissionEdge`.`voiceActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](https://graphql-markdown.dev/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character

#### [`CharacterSubmissionEdge`.`submittedVoiceActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSubmission`](https://graphql-markdown.dev/docs/types/objects/staff-submission) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The submitted voice actors of the character

### Member Of

[`CharacterSubmissionConnection`](https://graphql-markdown.dev/docs/types/objects/character-submission-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
