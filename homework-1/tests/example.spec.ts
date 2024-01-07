import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://congcu.org/k4class/guru99/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/XPath in Selenium/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://congcu.org/k4class/guru99/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Selenium' }).first().click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Selenium Tutorial Syllabus' })).toBeVisible();
});
