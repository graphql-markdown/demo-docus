<!--
  Overrides Docus' AppHeaderCTA (an empty slot on the right of the header) with
  a link to the GraphQL-Markdown repository. Docus' own header GitHub button
  needs the `github` option, which also turns on the edit-page links.
-->
<template>
  <UButton
    icon="i-simple-icons-github"
    to="https://github.com/graphql-markdown/graphql-markdown"
    target="_blank"
    aria-label="GitHub"
    color="neutral"
    variant="ghost"
  />
</template>
