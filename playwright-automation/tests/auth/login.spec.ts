import { test, expect } from '@playwright/test';
import { ENV } from '../../utils/env';
import { LoginPage } from '../../pages/auth/LoginPage';

test.describe('Auth - Login', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PASSWORD);
    console.log("Able to Login");
    // Placeholder assertion — update selector/URL to match your app
    await expect(page).toHaveURL(/dashboard/);
  });
});
