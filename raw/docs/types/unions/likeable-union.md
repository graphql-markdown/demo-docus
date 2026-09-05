# LikeableUnion

> Likeable union type

Likeable union type

```graphql
union LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment
```

### Possible types

#### [`LikeableUnion`.`ListActivity`](/docs/types/objects/list-activity) <badge color="neutral" size="sm" variant="subtle">object</badge>

User list activity (anime & manga updates)

#### [`LikeableUnion`.`TextActivity`](/docs/types/objects/text-activity) <badge color="neutral" size="sm" variant="subtle">object</badge>

User text activity

#### [`LikeableUnion`.`MessageActivity`](/docs/types/objects/message-activity) <badge color="neutral" size="sm" variant="subtle">object</badge>

User message activity

#### [`LikeableUnion`.`ActivityReply`](/docs/types/objects/activity-reply) <badge color="neutral" size="sm" variant="subtle">object</badge>

Replay to an activity item

#### [`LikeableUnion`.`Thread`](/docs/types/objects/thread) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread

#### [`LikeableUnion`.`ThreadComment`](/docs/types/objects/thread-comment) <badge color="neutral" size="sm" variant="subtle">object</badge>

Forum Thread Comment

### Returned By

[`ToggleLikeV2`](/docs/operations/mutations/toggle-like-v2)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>
