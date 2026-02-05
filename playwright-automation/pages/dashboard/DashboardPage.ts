import { BasePage } from '../base/BasePage';

export class DashboardPage extends BasePage {
  async isVisible() {
    await this.page.waitForSelector('header');
  }
}
