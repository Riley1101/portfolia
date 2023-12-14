import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const titleExpected = "Hello, I'm Arkar 👋";
const descExpected =
  "An inspiring software engineer, Coding with a strong passion for design and computer science, I enjoy creating amazing things and building blazingly-fast websites.";

test.describe("Home Page", () => {
  // intro
  test("have correct intro", async ({ page }) => {
    await page.goto("/");

    const title = await page.locator("[test-id=home-intro] >> h1").innerText();
    expect(title).toBe(titleExpected);

    const introEl = await page.locator("[test-id=home-intro]").boundingBox();
    expect(introEl).not.toBeNull();

    const desc = await page.locator("[test-id=home-intro] >> p").innerText();
    expect(desc).toContain(descExpected);
  });

  // cards
  test("all article cards should rendered", async ({ page }) => {
    await page.goto("/");

    const container = page.locator("[test-id=home-articles]");
    expect(container).toBeVisible();

    const articleCards = page.locator("[test-id=home-articles-card]");
    expect(articleCards).toBeTruthy();
    expect(articleCards).not.toBeNull();
    expect(articleCards).toHaveCount(5);
  });

  test("a single card should have correct behavior", async ({ page }) => {
    await page.goto("/");

    const articleCards = page.locator("[test-id=home-articles-card]");

    const firstCard = articleCards.first();
    expect(firstCard).toBeTruthy();
    expect(firstCard).not.toBeNull();

    expect(firstCard).toBeTruthy();
    expect(firstCard).not.toBeNull();

    const blobEl = firstCard.locator(".gradient-two");
    await expect(blobEl).toBeHidden();
    await firstCard.hover();
    const blobRect = await firstCard.boundingBox();
    expect(blobRect).not.toBeNull();
    if (!blobRect) return;
    await page.mouse.move(blobRect.x + blobRect.width / 2, blobRect.y);
    await page.mouse.down();
    await page.mouse.move(blobRect.x + blobRect.width / 2, blobRect.y + 100);
    await page.mouse.up();
    await expect(blobEl).toBeVisible();
  });

  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
