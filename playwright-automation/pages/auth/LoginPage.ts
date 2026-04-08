import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { safeClick, safeFill } from '../../utils/commonActions';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#emailInput');
    this.passwordInput = page.locator('#passwordInput');
    this.loginButton = page.getByRole('button', { name: /login/i });
  }

  async goto() {
    await super.goto('/login');
  }

  async login(email: string, password: string) {
    await safeFill(this.emailInput, email);
    await safeFill(this.passwordInput, password);
    await Promise.all([
      this.page.waitForURL(/dashboard|client\/dashboard|agent\/dashboard|agent/, { timeout: 30000 }),
      safeClick(this.loginButton),
    ]);
  }
}
