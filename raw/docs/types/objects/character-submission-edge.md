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

#### [`CharacterSubmissionEdge`.`node`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterSubmission`](/docs/types/objects/character-submission) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`CharacterSubmissionEdge`.`role`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterRole`](/docs/types/enums/character-role) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The characters role in the media

#### [`CharacterSubmissionEdge`.`voiceActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The voice actors of the character

#### [`CharacterSubmissionEdge`.`submittedVoiceActors`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffSubmission`](/docs/types/objects/staff-submission) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

The submitted voice actors of the character

### Member Of

[`CharacterSubmissionConnection`](/docs/types/objects/character-submission-connection)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
