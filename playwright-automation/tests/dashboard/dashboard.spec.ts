import { test, expect } from '../../fixtures/baseTest';
import { ENV } from '../../utils/env';

test.describe('Dashboard flow', () => {
  test('should filter last 3 months on dashboard', async ({ page, loginPage, dashboardPage }) => {
    await page.goto(ENV.BASE_URL);
    await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PASSWORD);

    await dashboardPage.openDashboardFromMenu();
    await dashboardPage.isVisible();
    await dashboardPage.selectLast3Months();

    await expect(dashboardPage.last3MonthsButton).toBeVisible();
  });
});
