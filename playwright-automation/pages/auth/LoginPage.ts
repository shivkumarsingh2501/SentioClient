import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class LoginPage extends BasePage {
  async goto() {
    await super.goto('/login');
  }

  async login(email: string, password: string) {
    // Ensure inputs are visible before interacting (use IDs from the page)
    await this.page.waitForSelector('#emailInput', { state: 'visible' });
    await this.page.fill('#emailInput', email);
    await this.page.waitForSelector('#passwordInput', { state: 'visible' });
    await this.page.fill('#passwordInput', password);

    // Wait for the submit button to become enabled (not disabled) and click by its text for robustness
    await this.page.waitForSelector('button:has-text("Login"):not([disabled])', { timeout: 5000 });

    // Click and wait for potential navigation (catch in case no navigation happens)
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {}),
      this.page.click('button:has-text("Login"):not([disabled])'),
    ]);
  }
}
