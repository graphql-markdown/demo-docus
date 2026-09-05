# ActivityType

> Activity type enum.

Activity type enum.

```graphql
enum ActivityType {
  TEXT
  ANIME_LIST
  MANGA_LIST
  MESSAGE
  MEDIA_LIST
}
```

### Values

#### [`ActivityType`.`TEXT`](#)

A text activity

#### [`ActivityType`.`ANIME_LIST`](#)

A anime list update activity

#### [`ActivityType`.`MANGA_LIST`](#)

A manga list update activity

#### [`ActivityType`.`MESSAGE`](#)

A text message activity sent to another user

#### [`ActivityType`.`MEDIA_LIST`](#)

Anime & Manga list update, only used in query arguments

### Member Of

[`Activity`](/docs/operations/queries/activity)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`ListActivity`](/docs/types/objects/list-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`MessageActivity`](/docs/types/objects/message-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`TextActivity`](/docs/types/objects/text-activity)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
