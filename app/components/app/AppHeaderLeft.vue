<!--
  Overrides Docus' AppHeaderLeft (an app component takes precedence over the
  layer's). Docus' `header.logo` option replaces the title with the image, so
  showing the logo next to the title needs the component.
-->
<script setup lang="ts">
const appConfig = useAppConfig()
const { localePath } = useDocusI18n()
const { baseURL } = useRuntimeConfig().app
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    :aria-label="appConfig.header?.title"
    class="flex items-center gap-2 font-semibold"
  >
    <img :src="`${baseURL}logo.svg`" alt="" class="h-6 w-auto shrink-0" />
    {{ appConfig.header?.title }}
  </NuxtLink>
</template>
