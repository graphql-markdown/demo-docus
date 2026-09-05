/**
 * Minimal formatter add-on for Docus.
 *
 * It only implements the index-metafile hook: every other formatting function
 * falls back to the GraphQL-Markdown defaults, whose HTML output Docus renders
 * as-is (see `app/app.css` for the styling of the `gqlmd-mdx-*` classes).
 *
 * The hook writes a `.navigation.yml` next to each generated category, which is
 * how Docus titles a sidebar section and gives it an icon:
 * https://docus.dev/en/concepts/customization#custom-icons
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
