# UpdateFavouriteOrder

> Update the order favourites are displayed in

Update the order favourites are displayed in

```graphql
UpdateFavouriteOrder(
  animeIds: [Int]
  mangaIds: [Int]
  characterIds: [Int]
  staffIds: [Int]
  studioIds: [Int]
  animeOrder: [Int]
  mangaOrder: [Int]
  characterOrder: [Int]
  staffOrder: [Int]
  studioOrder: [Int]
): Favourites
```

### Arguments

#### [`UpdateFavouriteOrder`.`animeIds`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the anime to un/favourite

#### [`UpdateFavouriteOrder`.`mangaIds`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the manga to un/favourite

#### [`UpdateFavouriteOrder`.`characterIds`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the character to un/favourite

#### [`UpdateFavouriteOrder`.`staffIds`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the staff to un/favourite

#### [`UpdateFavouriteOrder`.`studioIds`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the studio to un/favourite

#### [`UpdateFavouriteOrder`.`animeOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

List of integers which the anime should be ordered by (Asc)

#### [`UpdateFavouriteOrder`.`mangaOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

List of integers which the manga should be ordered by (Asc)

#### [`UpdateFavouriteOrder`.`characterOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

List of integers which the character should be ordered by (Asc)

#### [`UpdateFavouriteOrder`.`staffOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

List of integers which the staff should be ordered by (Asc)

#### [`UpdateFavouriteOrder`.`studioOrder`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">scalar</badge>

List of integers which the studio should be ordered by (Asc)

### Type

#### [`Favourites`](/docs/types/objects/favourites) <badge color="neutral" size="sm" variant="subtle">object</badge>

User's favourite anime, manga, characters, staff & studios
