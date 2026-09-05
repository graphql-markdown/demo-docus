# StaffSubmission

> A submission for a staff that features in an anime or manga

A submission for a staff that features in an anime or manga

```graphql
type StaffSubmission {
  id: Int!
  staff: Staff
  submission: Staff
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

#### [`StaffSubmission`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the submission

#### [`StaffSubmission`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

Staff that the submission is referencing

#### [`StaffSubmission`.`submission`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

The staff submission changes

#### [`StaffSubmission`.`submitter`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

Submitter for the submission

#### [`StaffSubmission`.`assignee`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

Data Mod assigned to handle the submission

#### [`StaffSubmission`.`status`](#)<span className="gqlmd-mdx-bullet">●</span>[`SubmissionStatus`](/docs/types/enums/submission-status) <badge color="neutral" size="sm" variant="subtle">enum</badge>

Status of the submission

#### [`StaffSubmission`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Inner details of submission status

#### [`StaffSubmission`.`source`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`StaffSubmission`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Whether the submission is locked

#### [`StaffSubmission`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

### Member Of

[`CharacterSubmissionEdge`](/docs/types/objects/character-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
