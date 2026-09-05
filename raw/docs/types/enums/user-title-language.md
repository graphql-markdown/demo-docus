# UserTitleLanguage

> The language the user wants to see media titles in

The language the user wants to see media titles in

```graphql
enum UserTitleLanguage {
  ROMAJI
  ENGLISH
  NATIVE
  ROMAJI_STYLISED
  ENGLISH_STYLISED
  NATIVE_STYLISED
}
```

### Values

#### [`UserTitleLanguage`.`ROMAJI`](#)

The romanization of the native language title

#### [`UserTitleLanguage`.`ENGLISH`](#)

The official english title

#### [`UserTitleLanguage`.`NATIVE`](#)

Official title in it's native language

#### [`UserTitleLanguage`.`ROMAJI_STYLISED`](#)

The romanization of the native language title, stylised by media creator

#### [`UserTitleLanguage`.`ENGLISH_STYLISED`](#)

The official english title, stylised by media creator

#### [`UserTitleLanguage`.`NATIVE_STYLISED`](#)

Official title in it's native language, stylised by media creator

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
