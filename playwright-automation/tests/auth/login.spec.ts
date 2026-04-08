import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';
import { ENV } from '../../utils/env';

test.describe('Auth - Login', () => {
  test('should login successfully', async ({ page, loginPage }) => {
    await page.goto(ENV.BASE_URL);
    await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PASSWORD);
    await expect(page).toHaveURL(/dashboard|agent\/dashboard/);
  });
});
