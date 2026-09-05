# MediaExternalLink

> An external link to another site related to the media or staff member

An external link to another site related to the media or staff member

```graphql
type MediaExternalLink {
  id: Int!
  url: String
  site: String!
  siteId: Int
  type: ExternalLinkType
  language: String
  color: String
  icon: String
  notes: String
  isDisabled: Boolean
}
```

### Fields

#### [`MediaExternalLink`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int!`](/docs/types/scalars/int) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the external link

#### [`MediaExternalLink`.`url`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The url of the external link or base url of link source

#### [`MediaExternalLink`.`site`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The links website site name

#### [`MediaExternalLink`.`siteId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The links website site id

#### [`MediaExternalLink`.`type`](#)<span className="gqlmd-mdx-bullet">●</span>[`ExternalLinkType`](/docs/types/enums/external-link-type) <badge color="neutral" size="sm" variant="subtle">enum</badge>

#### [`MediaExternalLink`.`language`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Language the site content is in. See Staff language field for values.

#### [`MediaExternalLink`.`color`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaExternalLink`.`icon`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The icon image url of the site. Not available for all links. Transparent PNG 64x64

#### [`MediaExternalLink`.`notes`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaExternalLink`.`isDisabled`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

### Returned By

[`ExternalLinkSourceCollection`](/docs/operations/queries/external-link-source-collection)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>



### Member Of

[`Media`](/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmissionComparison`](/docs/types/objects/media-submission-comparison)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MediaSubmissionEdge`](/docs/types/objects/media-submission-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`RevisionHistory`](/docs/types/objects/revision-history)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
