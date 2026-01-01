import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({
    colorScheme: 'dark',
    reducedMotion: 'reduce',
  });
  await page.addInitScript(() => {
    window.localStorage.setItem('theme', 'Orange');
  });
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 0));
});

test('Header', async ({ page }) => {
  await expect(page).toHaveScreenshot('default');
});

test('About', async ({ page }) => {
  await page.goto('#about');
  await expect(page).toHaveScreenshot('default');
});

test('Testimonials', async ({ page }) => {
  await page
    .locator('p')
    .filter({ hasText: /renato seems to have no limits/i })
    .scrollIntoViewIfNeeded();
  await expect(page).toHaveScreenshot('default');
});

test('Skills', async ({ page }) => {
  await page.goto('#skills');
  await expect(page).toHaveScreenshot('default');

  await page
    .locator('h3')
    .filter({ hasText: /technologies/i })
    .scrollIntoViewIfNeeded();
  await expect(page).toHaveScreenshot('technologies');

  await page
    .locator('button')
    .filter({ hasText: /react/i })
    .first()
    .click();
  await expect(page).toHaveScreenshot('dialog');
});

test('Projects', async ({ page }) => {
  await page
    .locator('h2')
    .filter({ hasText: /personal projects/i })
    .scrollIntoViewIfNeeded();
  await expect(page).toHaveScreenshot('default');

  await page
    .locator('article')
    .filter({ hasText: /logossim/i })
    .scrollIntoViewIfNeeded();
  await expect(page).toHaveScreenshot('project');
});

test('Experience', async ({ page }) => {
  await page
    .locator('h2')
    .filter({ hasText: /experience/i })
    .scrollIntoViewIfNeeded();
  await expect(page).toHaveScreenshot('default');

  await page.evaluate(() => window.scrollTo(0, 0));
  await page
    .locator('h3')
    .filter({ hasText: /shippo/i })
    .scrollIntoViewIfNeeded();
  await expect(page).toHaveScreenshot('timeline');
});

test('Footer', async ({ page }) => {
  await page.evaluate(() =>
    window.scrollTo(0, document.body.scrollHeight),
  );
  await expect(page).toHaveScreenshot('default');

  await page
    .locator('button')
    .filter({ hasText: /contact me/i })
    .click();
  await expect(page).toHaveScreenshot('contact');
});
