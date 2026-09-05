# MediaCoverImage

> No description

No description

```graphql
type MediaCoverImage {
  extraLarge: String
  large: String
  medium: String
  color: String
}
```

### Fields

#### [`MediaCoverImage`.`extraLarge`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The cover image url of the media at its largest size. If this size isn't available, large will be provided instead.

#### [`MediaCoverImage`.`large`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The cover image url of the media at a large size

#### [`MediaCoverImage`.`medium`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The cover image url of the media at medium size

#### [`MediaCoverImage`.`color`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Average #hex color of cover image

### Member Of

[`Media`](/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
