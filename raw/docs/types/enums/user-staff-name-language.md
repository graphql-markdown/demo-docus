# UserStaffNameLanguage

> The language the user wants to see staff and character names in

The language the user wants to see staff and character names in

```graphql
enum UserStaffNameLanguage {
  ROMAJI_WESTERN
  ROMAJI
  NATIVE
}
```

### Values

#### [`UserStaffNameLanguage`.`ROMAJI_WESTERN`](#)

The romanization of the staff or character's native name, with western name ordering

#### [`UserStaffNameLanguage`.`ROMAJI`](#)

The romanization of the staff or character's native name

#### [`UserStaffNameLanguage`.`NATIVE`](#)

The staff or character's name in their native language

### Member Of

[`UpdateUser`](/docs/operations/mutations/update-user)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UserOptions`](/docs/types/objects/user-options)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
