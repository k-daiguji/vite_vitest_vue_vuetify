import { expect, test } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro
test("visits the app root url", async ({ page }) => {
  await page.goto("/");

  const detectBtn = page.getByRole("button", { name: "Detect" });
  await expect(detectBtn.locator("nth=0")).toBeVisible();
  await expect(detectBtn.locator("nth=1")).toBeVisible();
});
