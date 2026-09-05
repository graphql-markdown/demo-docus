# SaveMessageActivity

> Create or update message activity for the currently authenticated user

Create or update message activity for the currently authenticated user

```graphql
SaveMessageActivity(
  id: Int
  message: String
  recipientId: Int
  private: Boolean
  locked: Boolean
  asMod: Boolean
): MessageActivity
```

### Arguments

#### [`SaveMessageActivity`.`id`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The activity id, required for updating

#### [`SaveMessageActivity`.`message`](#)<span className="gqlmd-mdx-bullet">●</span>[`String`](/docs/types/scalars/string) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The activity message text (Min: 2, Max: 10000)

#### [`SaveMessageActivity`.`recipientId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the user the message is being sent to

#### [`SaveMessageActivity`.`private`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity should be private

#### [`SaveMessageActivity`.`locked`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the activity should be locked. (Mod Only)

#### [`SaveMessageActivity`.`asMod`](#)<span className="gqlmd-mdx-bullet">●</span>[`Boolean`](/docs/types/scalars/boolean) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

If the message should be sent from the Moderator account (Mod Only)

### Type

#### [`MessageActivity`](/docs/types/objects/message-activity) <badge color="neutral" size="sm" variant="subtle">object</badge>

User message activity
