# MediaSubmission

> Media submission

Media submission

```graphql
type MediaSubmission {
  id: Int!
  submitter: User
  assignee: User
  status: SubmissionStatus
  submitterStats: Json
  notes: String
  source: String
  changes: [String]
  locked: Boolean
  media: Media
  submission: Media
  characters: [MediaSubmissionComparison]
  staff: [MediaSubmissionComparison]
  studios: [MediaSubmissionComparison]
  relations: [MediaEdge]
  externalLinks: [MediaSubmissionComparison]
  createdAt: Int
}
```

### Fields

#### [`MediaSubmission`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the submission

#### [`MediaSubmission`.`submitter`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

User submitter of the submission

#### [`MediaSubmission`.`assignee`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

Data Mod assigned to handle the submission

#### [`MediaSubmission`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionStatus`](/docs/types/enums/submission-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Status of the submission

#### [`MediaSubmission`.`submitterStats`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmission`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmission`.`source`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmission`.`changes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaSubmission`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the submission is locked

#### [`MediaSubmission`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmission`.`submission`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmission`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmission`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmission`.`studios`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmission`.`relations`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaEdge`](/docs/types/objects/media-edge) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmission`.`externalLinks`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">object</badge>

#### [`MediaSubmission`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

### Member Of

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
