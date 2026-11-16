<!--
  Overrides Docus' AppFooter to render the GraphQL-Markdown credit
  (AppFooterLeft) in the footer's center slot, so it is centered.
-->
<template>
  <UFooter>
    <AppFooterLeft />

    <template #right>
      <AppFooterRight />
    </template>
  </UFooter>
</template>
