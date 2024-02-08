import { test as setup } from '@playwright/test';

import { config } from '../config/config';

const authFile = 'playwright/.auth/serviceUser.json';

setup('authenticate user', async ({ page }) => {
  await page.goto('/account/login');
  await page.fill('input.form-element.input-email[type=email]', config.guestUser.email);
  await page.fill('input.form-element.input-password[type=password]',config.guestUser.password);
  await page.click('input.btn.btn-primary.btn-submit');

  await page.context().storageState({ path: authFile });
});
