# RevisionHistory

> Feed of mod edit activity

Feed of mod edit activity

```graphql
type RevisionHistory {
  id: Int!
  action: RevisionHistoryAction
  changes: Json
  user: User
  media: Media
  character: Character
  staff: Staff
  studio: Studio
  externalLink: MediaExternalLink
  createdAt: Int
}
```

### Fields

#### [`RevisionHistory`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the media

#### [`RevisionHistory`.`action`](#)<span className="gqlmd-mdx-bullet">●</span>[`RevisionHistoryAction`](/docs/types/enums/revision-history-action) <badge color="neutral" size="sm" variant="subtle">enum</badge>

The action taken on the objects

#### [`RevisionHistory`.`changes`](#)<span className="gqlmd-mdx-bullet">●</span>[`Json`](/docs/types/scalars/json) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

A JSON object of the fields that changed

#### [`RevisionHistory`.`user`](#)<span className="gqlmd-mdx-bullet">●</span>[`User`](/docs/types/objects/user) <badge color="neutral" size="sm" variant="subtle">object</badge>

The user who made the edit to the object

#### [`RevisionHistory`.`media`](#)<span className="gqlmd-mdx-bullet">●</span>[`Media`](/docs/types/objects/media) <badge color="neutral" size="sm" variant="subtle">object</badge>

The media the mod feed entry references

#### [`RevisionHistory`.`character`](#)<span className="gqlmd-mdx-bullet">●</span>[`Character`](/docs/types/objects/character) <badge color="neutral" size="sm" variant="subtle">object</badge>

The character the mod feed entry references

#### [`RevisionHistory`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`Staff`](/docs/types/objects/staff) <badge color="neutral" size="sm" variant="subtle">object</badge>

The staff member the mod feed entry references

#### [`RevisionHistory`.`studio`](#)<span className="gqlmd-mdx-bullet">●</span>[`Studio`](/docs/types/objects/studio) <badge color="neutral" size="sm" variant="subtle">object</badge>

The studio the mod feed entry references

#### [`RevisionHistory`.`externalLink`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaExternalLink`](/docs/types/objects/media-external-link) <badge color="neutral" size="sm" variant="subtle">object</badge>

The external link source the mod feed entry references

#### [`RevisionHistory`.`createdAt`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

When the mod feed entry was created

### Member Of

[`InternalPage`](/docs/types/objects/internal-page)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
