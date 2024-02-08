import { expect, test, Page } from '@playwright/test';

const authFile = 'playwright/.auth/serviceUser.json';

let page: Page;

test('page load - check login page fields elements', async ({ browser }) => {
  const context = await browser.newContext({ storageState: authFile })
  page = await context.newPage();

  await page.goto('/');
  await page.waitForTimeout(3000);

  await expect(page.locator('nav > div.user-info > button > img')).toBeVisible();

});
