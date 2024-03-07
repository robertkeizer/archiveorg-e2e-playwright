import { type Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  public constructor(page: Page) {
    this.page = page;
  }
}
