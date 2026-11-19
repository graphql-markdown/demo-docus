import{J as e,h as t,y as n}from"./BPjRvE1P.js";import{k as r}from"#entry";var i={},a={class:`schema-preview overflow-hidden rounded-lg border border-accented shadow-[20px_20px_0_#e4e4e7] dark:shadow-[20px_20px_0_#171717]`};function o(r,i){return e(),t(`div`,a,[...i[0]||=[n(`<div class="flex items-center justify-between border-b border-zinc-700/80 px-5 py-4"><span class="font-mono text-sm text-zinc-400">workspace.graphql</span><span class="rounded bg-green-400/10 px-2 py-1 font-mono text-xs text-green-400">SCHEMA</span></div><pre class="schema-preview-code m-0 overflow-x-auto p-6 text-sm leading-7"><code><span class="token-keyword">type</span> <span class="token-type">Project</span> <span class="token-keyword">implements</span> <span class="token-type">Node</span> {
  <span class="token-field">id</span>: <span class="token-type">ID!</span>
  <span class="token-field">name</span>: <span class="token-type">String!</span>
  <span class="token-field">status</span>: <span class="token-type">ProjectStatus!</span>
  <span class="token-field">owner</span>: <span class="token-type">User!</span>
}

<span class="token-keyword">type</span> <span class="token-type">Query</span> {
  <span class="token-field">projects</span>(status: <span class="token-type">ProjectStatus</span>):
    <span class="token-type">ProjectConnection!</span>
}</code></pre>`,2)]])}var s=Object.assign(r(i,[[`render`,o]]),{__name:`SchemaPreview`});export{s as default};