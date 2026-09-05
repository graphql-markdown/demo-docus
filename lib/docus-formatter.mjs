/**
 * Minimal formatter add-on for Docus.
 *
 * Everything it does not export falls back to the GraphQL-Markdown defaults,
 * whose HTML output Docus renders as-is (see `app/app.css` for the styling of
 * the `gqlmd-mdx-*` classes).
 *
 * - `beforeGenerateIndexMetafileHook` writes a `.navigation.yml` next to each
 *   generated category, which is how Docus titles a sidebar section and gives
 *   it an icon: https://docus.dev/en/concepts/customization#custom-icons
 * - `formatMDXNameEntity` drops the wrapper the default emits, so that the
 *   entity renders as a link Docus can style.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

/** Iconify (lucide) icon per generated category, keyed by folder name. */
const CATEGORY_ICONS = {
  deprecated: "i-lucide-archive",
  directives: "i-lucide-at-sign",
  enums: "i-lucide-list",
  inputs: "i-lucide-log-in",
  interfaces: "i-lucide-layers",
  mutations: "i-lucide-pencil",
  objects: "i-lucide-box",
  operations: "i-lucide-workflow",
  queries: "i-lucide-search",
  scalars: "i-lucide-hash",
  subscriptions: "i-lucide-radio",
  types: "i-lucide-shapes",
  unions: "i-lucide-git-merge",
};

const startCase = (value) =>
  value
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

/** Docus reads Markdown through Nuxt Content, so pages are plain `.md`. */
export const mdxExtension = ".md";

/**
 * Renders a field or type name as `<code>` elements.
 *
 * The default wraps them in a `<span class="gqlmd-mdx-entity">`, which is what
 * Nuxt UI's prose link styling keys off the absence of: its hover, focus and
 * dashed-border rules are all written as `[&>code]`, a direct-child selector
 * the wrapper breaks. Without it the code element is a child of the link
 * again, and an entity linking to another type highlights on hover like every
 * other code link in the theme.
 *
 * @param name - Entity name
 * @param parentType - Optional parent type name, rendered as a `Parent.name` prefix
 * @returns The entity as one or two `<code>` elements
 */
export const formatMDXNameEntity = (name, parentType) => {
  const parent = parentType
    ? `<code class="gqlmd-mdx-entity-parent">${parentType}</code>.`
    : "";
  return `${parent}<code class="gqlmd-mdx-entity-name">${name}</code>`;
};

export const beforeGenerateIndexMetafileHook = async ({ data }) => {
  const { dirPath, category, outputAdapter } = data;

  const icon = CATEGORY_ICONS[category.toLowerCase()];
  const content = `title: ${startCase(category)}\n${icon ? `icon: ${icon}\n` : ""}`;
  const filePath = join(dirPath, ".navigation.yml");

  // Metafiles have to go through the same destination as the pages, so a
  // custom output adapter keeps them alongside what it wrote.
  if (outputAdapter) {
    await outputAdapter.ensureDir?.(dirPath);
    await outputAdapter.writeFile(filePath, content);
    return;
  }

  await mkdir(dirPath, { recursive: true });
  await writeFile(filePath, content, "utf-8");
};
