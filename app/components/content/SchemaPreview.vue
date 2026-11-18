<template>
  <div
    class="schema-preview overflow-hidden rounded-lg border border-accented shadow-[20px_20px_0_#e4e4e7] dark:shadow-[20px_20px_0_#171717]"
  >
    <div
      class="flex items-center justify-between border-b border-zinc-700/80 px-5 py-4"
    >
      <span class="font-mono text-sm text-zinc-400">workspace.graphql</span>
      <span
        class="rounded bg-green-400/10 px-2 py-1 font-mono text-xs text-green-400"
        >SCHEMA</span
      >
    </div>
    <pre
      class="schema-preview-code m-0 overflow-x-auto p-6 text-sm leading-7"
    ><code><span class="token-keyword">type</span> <span class="token-type">Project</span> <span class="token-keyword">implements</span> <span class="token-type">Node</span> {
  <span class="token-field">id</span>: <span class="token-type">ID!</span>
  <span class="token-field">name</span>: <span class="token-type">String!</span>
  <span class="token-field">status</span>: <span class="token-type">ProjectStatus!</span>
  <span class="token-field">owner</span>: <span class="token-type">User!</span>
}

<span class="token-keyword">type</span> <span class="token-type">Query</span> {
  <span class="token-field">projects</span>(status: <span class="token-type">ProjectStatus</span>):
    <span class="token-type">ProjectConnection!</span>
}</code></pre>
  </div>
</template>

<style>
/* The schema preview stays dark in both modes — it reads as a code surface. */
.schema-preview {
  background: #1f1f1f;
}
.schema-preview-code,
.schema-preview-code code {
  background: transparent;
  border: 0;
  color: #e4e4e7;
  font-size: 0.875rem;
  line-height: 1.75;
}
.schema-preview .token-keyword {
  color: #d8b4fe;
}
.schema-preview .token-type {
  color: #93c5fd;
}
.schema-preview .token-field {
  color: #f0abfc;
}
</style>
