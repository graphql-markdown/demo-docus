---
title: "MediaStatus"
description: "The current releasing status of the media"
canonical_url: "https://graphql-markdown.dev/docs/types/enums/media-status"
---
# MediaStatus

> The current releasing status of the media

The current releasing status of the media

```graphql
enum MediaStatus {
  FINISHED
  RELEASING
  NOT_YET_RELEASED
  CANCELLED
  HIATUS
}
```

### Values

#### [`MediaStatus`.`FINISHED`](#)

Has completed and is no longer being released

#### [`MediaStatus`.`RELEASING`](#)

Currently releasing

#### [`MediaStatus`.`NOT_YET_RELEASED`](#)

To be released at a later date

#### [`MediaStatus`.`CANCELLED`](#)

Ended before the work could be finished

#### [`MediaStatus`.`HIATUS`](#)

Version 2 only. Is currently paused from releasing and will resume at a later date

### Member Of

[`Media`](https://graphql-markdown.dev/docs/operations/queries/media)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`Media`](https://graphql-markdown.dev/docs/types/objects/media)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
