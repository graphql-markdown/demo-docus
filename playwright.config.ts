import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.VISUAL_PORT ?? 4173);

// Stabilize font rendering across machines (recommended by Argos).
const launchOptions = {
  args: ["--disable-lcd-text", "--font-render-hinting=none"],
};

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    [process.env.CI ? "dot" : "list"],
    [
      "@argos-ci/playwright/reporter",
      { uploadToArgos: !!process.env.CI && !!process.env.ARGOS_TOKEN },
    ],
  ],
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], launchOptions } },
    { name: "mobile", use: { ...devices["Pixel 7"], launchOptions } },
  ],
  webServer: {
    // Static output of `npm run generate`; build it before running tests.
    command: `npx serve -l ${port} .output/public`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    env: { NO_UPDATE_CHECK: "1" },
  },
});
