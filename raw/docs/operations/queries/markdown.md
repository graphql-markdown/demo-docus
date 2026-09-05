# Markdown

> Provide AniList markdown to be converted to html (Requires auth)

Provide AniList markdown to be converted to html (Requires auth)

```graphql
Markdown(
  markdown: String!
): ParsedMarkdown
```

### Arguments

#### [`Markdown`.`markdown`](#)<span className="gqlmd-mdx-bullet">●</span>[`String!`](/docs/types/scalars/string) <badge color="primary" size="sm" variant="subtle">non-null</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The markdown to be parsed to html

### Type

#### [`ParsedMarkdown`](/docs/types/objects/parsed-markdown) <badge color="neutral" size="sm" variant="subtle">object</badge>

Provides the parsed markdown as html
