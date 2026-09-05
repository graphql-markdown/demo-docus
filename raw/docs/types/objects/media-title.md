# MediaTitle

> The official titles of the media in various languages

The official titles of the media in various languages

```graphql
type MediaTitle {
  romaji(
    stylised: Boolean
  ): String
  english(
    stylised: Boolean
  ): String
  native(
    stylised: Boolean
  ): String
  userPreferred: String
}
```

### Fields

#### [`MediaTitle`.`romaji`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The romanization of the native language title

##### [`MediaTitle.romaji`.`stylised`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaTitle`.`english`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The official english title

##### [`MediaTitle.english`.`stylised`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaTitle`.`native`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

Official title in it's native language

##### [`MediaTitle.native`.`stylised`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

#### [`MediaTitle`.`userPreferred`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The currently authenticated users preferred title language. Default romaji for non-authenticated

### Member Of

[`Media`](/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
