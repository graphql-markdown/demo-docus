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
 * - `formatMDXBadge` and `formatMDXAdmonition` emit MDC components rather than
 *   the default HTML, so type badges and deprecation notices are rendered by
 *   Nuxt UI: https://docus.dev/en/essentials/components
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

/** Nuxt UI badge colour per badge text; anything else stays neutral. */
const BADGE_COLORS = {
  deprecated: "warning",
  "non-null": "primary",
};

/** Lucide icon per admonition type, used as the accordion item icon. */
const ADMONITION_ICONS = {
  caution: "i-lucide-triangle-alert",
  danger: "i-lucide-octagon-alert",
  deprecated: "i-lucide-archive",
  info: "i-lucide-info",
  note: "i-lucide-info",
  success: "i-lucide-circle-check",
  tip: "i-lucide-lightbulb",
  warning: "i-lucide-triangle-alert",
};

/**
 * Renders a type badge as a Nuxt UI `Badge`.
 *
 * Inline MDC (`:badge[...]`) rather than the block form, because badges sit on
 * the same line as the entity they annotate.
 *
 * @param badge - Badge data, whose text is the badge label
 * @returns The badge as an inline MDC component
 */
export const formatMDXBadge = ({ text }) => {
  const label = String(text);
  const color = BADGE_COLORS[label.toLowerCase()] ?? "neutral";
  return `:badge[${label}]{color="${color}" variant="subtle" size="sm"}`;
};

/**
 * Renders an admonition — in practice a deprecation notice — as a collapsed
 * Nuxt UI `Accordion`.
 *
 * The reason a field is deprecated matters only to whoever still uses it, so
 * it is folded away rather than given a permanent block of its own.
 *
 * @param admonition - Admonition data with text, title and type
 * @returns The admonition as an MDC accordion block
 */
export const formatMDXAdmonition = ({ text, title, type }) => {
  const label = title
    ? `${title.charAt(0).toUpperCase()}${title.slice(1).toLowerCase()}`
    : type;
  // Deprecations reach the formatter as `warning` admonitions titled
  // "DEPRECATED", so the title picks the icon whenever it names a kind.
  const icon =
    ADMONITION_ICONS[String(title).toLowerCase()] ??
    ADMONITION_ICONS[type.toLowerCase()] ??
    ADMONITION_ICONS.note;

  // An empty accordion item renders as a header that opens onto nothing, and
  // a deprecation without a reason is exactly that case.
  const body = String(text).trim() || "No reason given.";
  const content = body
    .split("\n")
    .map((line) => (line.trim() === "" ? "" : `  ${line}`))
    .join("\n");

  return `\n\n::accordion\n  :::accordion-item{label="${label.replaceAll('"', "&quot;")}" icon="${icon}"}\n${content}\n  :::\n::\n\n`;
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
