import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/auth/LoginPage';
import { KbAssistantPage } from '../../pages/agent/KbAssistantPage';
import { ENV } from '../../utils/env';

test.describe('KB Assistant Chat', () => {
  test('Agent should ask question in KB Assistant', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const kbAssistant = new KbAssistantPage(page);

    // Login
    await page.goto(ENV.BASE_URL);
    await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PASSWORD);

    // Open KB Assistant
    await kbAssistant.openKbAssistant();

    // Ask question
    await kbAssistant.askQuestion(
      'can you tell me about gift certificates'
    );

    // Optional: wait for AI response
    await expect(
      page.locator('text=gift')
    ).toBeVisible({ timeout: 15000 });
  });
});
