# Favourites

> User's favourite anime, manga, characters, staff & studios

User's favourite anime, manga, characters, staff & studios

```graphql
type Favourites {
  anime(
    page: Int
    perPage: Int
  ): MediaConnection
  manga(
    page: Int
    perPage: Int
  ): MediaConnection
  characters(
    page: Int
    perPage: Int
  ): CharacterConnection
  staff(
    page: Int
    perPage: Int
  ): StaffConnection
  studios(
    page: Int
    perPage: Int
  ): StudioConnection
}
```

### Fields

#### [`Favourites`.`anime`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaConnection`](/docs/types/objects/media-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Favourite anime

##### [`Favourites.anime`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page number

##### [`Favourites.anime`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Favourites`.`manga`](#)<span className="gqlmd-mdx-bullet">●</span>[`MediaConnection`](/docs/types/objects/media-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Favourite manga

##### [`Favourites.manga`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page number

##### [`Favourites.manga`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Favourites`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`CharacterConnection`](/docs/types/objects/character-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Favourite characters

##### [`Favourites.characters`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page number

##### [`Favourites.characters`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Favourites`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`StaffConnection`](/docs/types/objects/staff-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Favourite staff

##### [`Favourites.staff`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page number

##### [`Favourites.staff`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`Favourites`.`studios`](#)<span className="gqlmd-mdx-bullet">●</span>[`StudioConnection`](/docs/types/objects/studio-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

Favourite studios

##### [`Favourites.studios`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page number

##### [`Favourites.studios`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

### Returned By

[`ToggleFavourite`](/docs/operations/mutations/toggle-favourite)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>

<span className="gqlmd-mdx-bullet">

●

</span>

[`UpdateFavouriteOrder`](/docs/operations/mutations/update-favourite-order)  <badge color="neutral" size="sm" variant="subtle">

mutation

</badge>



### Member Of

[`User`](/docs/types/objects/user)  <badge color="neutral" size="sm" variant="subtle">

object

</badge>
