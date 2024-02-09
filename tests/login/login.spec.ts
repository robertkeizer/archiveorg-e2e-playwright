// source: https://playwright.dev/docs/auth

import { test } from '@playwright/test';

import { config } from '../../config/config';

const authFile = 'playwright/.auth/guest.json';

test('login flow', async ({ page }) => {
  await page.goto('/account/login');
  await page.fill('input.form-element.input-email[type=email]', config.guestUser.email);
  await page.fill('input.form-element.input-password[type=password]',config.guestUser.password);
  await page.click('input.btn.btn-primary.btn-submit');

  await page.context().storageState({ path: authFile });
});

// test.describe('use auth', () => {
//   test.use({ storageState: authFile });

//   test('user test', async ({ page }) => {
//     await page.goto('/');
//     await page.waitForTimeout(3000);
//   });
// });
