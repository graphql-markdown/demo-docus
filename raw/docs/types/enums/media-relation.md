# MediaRelation

> Type of relation media has to its parent.

Type of relation media has to its parent.

```graphql
enum MediaRelation {
  ADAPTATION
  PREQUEL
  SEQUEL
  PARENT
  SIDE_STORY
  CHARACTER
  SUMMARY
  ALTERNATIVE
  SPIN_OFF
  OTHER
  SOURCE
  COMPILATION
  CONTAINS
  SAME_UNIVERSE
}
```

### Values

#### [`MediaRelation`.`ADAPTATION`](#)

An adaption of this media into a different format

#### [`MediaRelation`.`PREQUEL`](#)

Released before the relation

#### [`MediaRelation`.`SEQUEL`](#)

Released after the relation

#### [`MediaRelation`.`PARENT`](#)

The media a side story is from

#### [`MediaRelation`.`SIDE_STORY`](#)

A side story of the parent media

#### [`MediaRelation`.`CHARACTER`](#)

Shares at least 1 character

#### [`MediaRelation`.`SUMMARY`](#)

A shortened and summarized version

#### [`MediaRelation`.`ALTERNATIVE`](#)

An alternative version of the same media

#### [`MediaRelation`.`SPIN_OFF`](#)

An alternative version of the media with a different primary focus

#### [`MediaRelation`.`OTHER`](#)

Other

#### [`MediaRelation`.`SOURCE`](#)

Version 2 only. The source material the media was adapted from

#### [`MediaRelation`.`COMPILATION`](#)

Version 2 only.

#### [`MediaRelation`.`CONTAINS`](#)

Version 2 only.

#### [`MediaRelation`.`SAME_UNIVERSE`](#)

Version 3 only. The media is set in the same universe as another media

### Member Of

[`MediaEdge`](/docs/types/objects/media-edge)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
