# MediaSubmissionEdge

> No description

No description

```graphql
type MediaSubmissionEdge {
  id: Int
  characterRole: CharacterRole
  staffRole: String
  roleNotes: String
  dubGroup: String
  characterName: String
  isMain: Boolean
  character: Character
  characterSubmission: Character
  voiceActor: Staff
  voiceActorSubmission: Staff
  staff: Staff
  staffSubmission: Staff
  studio: Studio
  externalLink: MediaExternalLink
  media: Media
}
```

### Fields

#### [`MediaSubmissionEdge`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the direct submission

#### [`MediaSubmissionEdge`.`characterRole`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterRole`](/docs/types/enums/character-role) <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`MediaSubmissionEdge`.`staffRole`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmissionEdge`.`roleNotes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmissionEdge`.`dubGroup`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmissionEdge`.`characterName`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmissionEdge`.`isMain`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmissionEdge`.`character`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`characterSubmission`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`voiceActor`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`voiceActorSubmission`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`staffSubmission`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`studio`](#)<span className="gqlmd-mdx-bullet">●</span>[`Studio`](/docs/types/objects/studio) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`externalLink`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaExternalLink`](/docs/types/objects/media-external-link) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmissionEdge`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

### Member Of

[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
