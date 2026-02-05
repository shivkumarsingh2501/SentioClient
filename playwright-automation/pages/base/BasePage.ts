import { Page } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  async goto(path = '/') {
    await this.page.goto(path);
  }
}
