import { test, _electron as electron, expect } from "@playwright/test";

test("visits the app root url", async () => {
  const app = await electron.launch({ args: ["./src/main/index.js"] });
  const page = await app.firstWindow();

  expect(await page.title()).toBe("My App");

  const state = page.locator("#state");
  await page.locator("#on-button").click();
  await expect(state).toHaveText("State: true");
  await page.locator("#off-button").click();
  await expect(state).toHaveText("State: false");

  await app.close();
});
