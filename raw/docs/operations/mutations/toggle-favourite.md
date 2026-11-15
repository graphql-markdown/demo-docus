---
title: "ToggleFavourite"
description: "Favourite or unfavourite an anime, manga, character, staff member, or studio"
canonical_url: "https://graphql-markdown.dev/docs/operations/mutations/toggle-favourite"
---
# ToggleFavourite

> Favourite or unfavourite an anime, manga, character, staff member, or studio

Favourite or unfavourite an anime, manga, character, staff member, or studio

```graphql
ToggleFavourite(
  animeId: Int
  mangaId: Int
  characterId: Int
  staffId: Int
  studioId: Int
): Favourites
```

### Arguments

#### [`ToggleFavourite`.`animeId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the anime to un/favourite

#### [`ToggleFavourite`.`mangaId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the manga to un/favourite

#### [`ToggleFavourite`.`characterId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the character to un/favourite

#### [`ToggleFavourite`.`staffId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the staff to un/favourite

#### [`ToggleFavourite`.`studioId`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](https://graphql-markdown.dev/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The id of the studio to un/favourite

### Type

#### [`Favourites`](https://graphql-markdown.dev/docs/types/objects/favourites) <badge color="neutral" size="sm" variant="subtle">object</badge>

User's favourite anime, manga, characters, staff & studios


## Sitemap

See the full [sitemap](https://graphql-markdown.dev/sitemap.md) for all pages.
