# ScoreFormat

> Media list scoring type

Media list scoring type

```graphql
enum ScoreFormat {
  POINT_100
  POINT_10_DECIMAL
  POINT_10
  POINT_5
  POINT_3
}
```

### Values

#### [`ScoreFormat`.`POINT_100`](#)

An integer from 0-100

#### [`ScoreFormat`.`POINT_10_DECIMAL`](#)

A float from 0-10 with 1 decimal place

#### [`ScoreFormat`.`POINT_10`](#)

An integer from 0-10

#### [`ScoreFormat`.`POINT_5`](#)

An integer from 0-5. Should be represented in Stars

#### [`ScoreFormat`.`POINT_3`](#)

An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :)

### Member Of

[`MediaListOptions`](/docs/types/objects/media-list-options)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UpdateUser`](/docs/operations/mutations/update-user)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>
