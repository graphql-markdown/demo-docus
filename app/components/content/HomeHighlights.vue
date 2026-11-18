<template>
  <section class="border-y border-default bg-muted">
    <UPageGrid class="mx-auto max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 lg:grid-cols-3">
      <UPageCard
        v-for="highlight in highlights"
        :key="highlight.headline"
        :title="highlight.title"
        variant="naked"
        :ui="{
          container: 'p-0 sm:p-0 gap-y-0',
          title: 'mt-3 text-lg font-normal',
        }"
      >
        <template #leading>
          <p class="m-0 font-mono text-xs text-primary">
            {{ highlight.headline }}
          </p>
        </template>
      </UPageCard>
    </UPageGrid>
  </section>
</template>

<script setup lang="ts">
const highlights = [
  { headline: "OPERATIONS", title: "Queries, mutations, subscriptions" },
  { headline: "MODELS", title: "Objects, inputs, unions, enums" },
  { headline: "EXAMPLES", title: "Schema-defined GraphQL samples" },
];
</script>
