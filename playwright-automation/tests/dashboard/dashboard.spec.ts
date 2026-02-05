import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/dashboard/DashboardPage';

test.describe('Dashboard', () => {
  test('should show dashboard header', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.goto('/dashboard');
    await dashboard.isVisible();
    // Placeholder assertion — update selector to match your app
    await expect(page.getByRole('banner')).toBeVisible();
  });
});
