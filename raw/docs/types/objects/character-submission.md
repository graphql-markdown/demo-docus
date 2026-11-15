---
title: "CharacterSubmission"
description: "A submission for a character that features in an anime or manga"
canonical_url: "https://graphql-markdown.dev/docs/types/objects/character-submission"
---
# CharacterSubmission

> A submission for a character that features in an anime or manga

A submission for a character that features in an anime or manga

```graphql
type CharacterSubmission {
  id: Int!
  character: Character
  submission: Character
  submitter: User
  assignee: User
  status: SubmissionStatus
  notes: String
  source: String
  locked: Boolean
  createdAt: Int
}
```

### Fields

#### [`CharacterSubmission`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the submission

#### [`CharacterSubmission`.`character`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](https://graphql-markdown.dev/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

Character that the submission is referencing

#### [`CharacterSubmission`.`submission`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](https://graphql-markdown.dev/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

The character submission changes

#### [`CharacterSubmission`.`submitter`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

Submitter for the submission

#### [`CharacterSubmission`.`assignee`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](https://graphql-markdown.dev/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

Data Mod assigned to handle the submission

#### [`CharacterSubmission`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionStatus`](https://graphql-markdown.dev/docs/types/enums/submission-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Status of the submission

#### [`CharacterSubmission`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Inner details of submission status

#### [`CharacterSubmission`.`source`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](https://graphql-markdown.dev/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`CharacterSubmission`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](https://graphql-markdown.dev/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the submission is locked

#### [`CharacterSubmission`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

### Member Of

[`CharacterSubmissionConnection`](https://graphql-markdown.dev/docs/types/objects/character-submission-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`CharacterSubmissionEdge`](https://graphql-markdown.dev/docs/types/objects/character-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](https://graphql-markdown.dev/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
