import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { safeClick } from '../../utils/commonActions';

export class DashboardPage extends BasePage {
  readonly dashboardMenu: Locator;
  readonly last3MonthsButton: Locator;
  readonly spinAndEarnButton: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.dashboardMenu = page.getByRole('link', { name: /Dashboard/i }).first();
    this.last3MonthsButton = page.locator('text=Last 3 Months').first();
    this.spinAndEarnButton = page.getByRole('button', { name: /Spin and Earn/i });
    this.dashboardHeader = page.locator('text=Welcome Aman Jain to Sentio').first();
  }

  async openDashboardFromMenu() {
    if (this.page.url().includes('/client/dashboard')) {
      return;
    }

    await Promise.all([
      this.page.waitForURL(/\/client\/dashboard/, { timeout: 30000 }),
      safeClick(this.dashboardMenu),
    ]);
  }

  async isVisible() {
    await this.dashboardHeader.waitFor({ state: 'visible', timeout: 10000 });
  }

  async selectLast3Months() {
    await safeClick(this.last3MonthsButton);
  }

  async clickSpinAndEarn() {
    await safeClick(this.spinAndEarnButton);
  }
}
