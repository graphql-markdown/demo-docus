# SiteStatistics

> No description

No description

```graphql
type SiteStatistics {
  users(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  anime(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  manga(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  characters(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  staff(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  studios(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  reviews(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
}
```

### Fields

#### [`SiteStatistics`.`users`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendConnection`](/docs/types/objects/site-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`SiteStatistics.users`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendSort`](/docs/types/enums/site-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`SiteStatistics.users`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`SiteStatistics.users`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`SiteStatistics`.`anime`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendConnection`](/docs/types/objects/site-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`SiteStatistics.anime`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendSort`](/docs/types/enums/site-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`SiteStatistics.anime`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`SiteStatistics.anime`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`SiteStatistics`.`manga`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendConnection`](/docs/types/objects/site-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`SiteStatistics.manga`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendSort`](/docs/types/enums/site-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`SiteStatistics.manga`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`SiteStatistics.manga`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`SiteStatistics`.`characters`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendConnection`](/docs/types/objects/site-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`SiteStatistics.characters`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendSort`](/docs/types/enums/site-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`SiteStatistics.characters`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`SiteStatistics.characters`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`SiteStatistics`.`staff`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendConnection`](/docs/types/objects/site-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`SiteStatistics.staff`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendSort`](/docs/types/enums/site-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`SiteStatistics.staff`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`SiteStatistics.staff`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`SiteStatistics`.`studios`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendConnection`](/docs/types/objects/site-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`SiteStatistics.studios`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendSort`](/docs/types/enums/site-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`SiteStatistics.studios`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`SiteStatistics.studios`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

#### [`SiteStatistics`.`reviews`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendConnection`](/docs/types/objects/site-trend-connection) <badge color="neutral" size="sm" variant="subtle">object</badge>

##### [`SiteStatistics.reviews`.`sort`](#)<span className="gqlmd-mdx-bullet">●</span>[`SiteTrendSort`](/docs/types/enums/site-trend-sort) <badge color="neutral" size="sm" variant="subtle">list</badge> <badge color="neutral" size="sm" variant="subtle">enum</badge>

##### [`SiteStatistics.reviews`.`page`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The page

##### [`SiteStatistics.reviews`.`perPage`](#)<span className="gqlmd-mdx-bullet">●</span>[`Int`](/docs/types/scalars/int) <badge color="neutral" size="sm" variant="subtle">scalar</badge>

The amount of entries per page, max 25

### Returned By

[`SiteStatistics`](/docs/operations/queries/site-statistics)  <badge color="neutral" size="sm" variant="subtle">

query

</badge>
