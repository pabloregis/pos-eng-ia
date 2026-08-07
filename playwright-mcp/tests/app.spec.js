const { test, expect } = require("@playwright/test");

test("loads the image gallery form", async ({ page }) => {
  await page.goto("/vanilla-js-web-app-example/");

  await expect(page).toHaveTitle("TDD Frontend Example");
  await expect(
    page.getByRole("textbox", { name: "Image Title" }),
  ).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Image URL" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Submit Form" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AI Alien" })).toBeVisible();
});

test("adds a submitted image to the gallery", async ({ page }) => {
  await page.goto("/vanilla-js-web-app-example/");

  const galleryHeadings = page.getByRole("heading");
  await expect(galleryHeadings).toHaveCount(3);

  await page
    .getByRole("textbox", { name: "Image Title" })
    .fill("Playwright Test Card");
  await page
    .getByRole("textbox", { name: "Image URL" })
    .fill("https://placehold.co/640x480/png");
  await page.getByRole("button", { name: "Submit Form" }).click();

  await expect(galleryHeadings).toHaveCount(4);
  await expect(
    page.getByRole("heading", { name: "Playwright Test Card" }),
  ).toBeVisible();
});

test("shows validation messages when submitting an empty form", async ({
  page,
}) => {
  await page.goto("/vanilla-js-web-app-example/");

  await page.getByRole("button", { name: "Submit Form" }).click();

  await expect(
    page.getByText("Please type a title for the image."),
  ).toBeVisible();
  await expect(page.getByText("Please type a valid URL")).toBeVisible();
  await expect(page.getByRole("heading")).toHaveCount(3);
});

test("rejects a malformed image URL", async ({ page }) => {
  await page.goto("/vanilla-js-web-app-example/");

  await page
    .getByRole("textbox", { name: "Image Title" })
    .fill("Invalid URL Card");
  await page
    .getByRole("textbox", { name: "Image URL" })
    .fill("not-a-valid-url");
  await page.getByRole("button", { name: "Submit Form" }).click();

  await expect(page.getByText("Please type a valid URL")).toBeVisible();
  await expect(page.getByRole("heading")).toHaveCount(3);
});
