import { expect, test, type Page } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

// One page per GraphQL type kind the theme renders differently.
const pages = [
  ["object", "/docs/types/objects/project", "Project"],
  ["enum", "/docs/types/enums/project-status", "ProjectStatus"],
  ["interface", "/docs/types/interfaces/node", "Node"],
  ["union", "/docs/types/unions/search-result", "SearchResult"],
  ["input", "/docs/types/inputs/create-project-input", "CreateProjectInput"],
  ["scalar", "/docs/types/scalars/date-time", "DateTime"],
  ["query", "/docs/operations/queries/projects", "projects"],
  ["mutation", "/docs/operations/mutations/create-project", "createProject"],
  ["subscription", "/docs/operations/subscriptions/project-changed", "projectChanged"],
  ["directive", "/docs/types/directives/deprecated", "deprecated"],
] as const;

// Element screenshots are stitched while scrolling, so the sticky header and
// footer would be painted over the content. Hide them for those shots.
const hideChrome = "header, footer, aside { display: none !important; }";

const content = (page: Page) => page.locator('main [data-slot="center"]').first();

test("home", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toContainText("Your API, mapped with intent.");
  await argosScreenshot(page, "home");
});

for (const [kind, url, title] of pages) {
  test(`page: ${kind}`, async ({ page }) => {
    const response = await page.goto(url);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toHaveText(title);
    await argosScreenshot(page, `page-${kind}`, {
      element: content(page),
      argosCSS: hideChrome,
    });
  });
}

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("home", async ({ page }) => {
    await page.goto("/");
    await argosScreenshot(page, "home-dark");
  });

  test("page: object", async ({ page }) => {
    await page.goto("/docs/types/objects/project");
    await argosScreenshot(page, "page-object-dark", {
      element: content(page),
      argosCSS: hideChrome,
    });
  });
});
