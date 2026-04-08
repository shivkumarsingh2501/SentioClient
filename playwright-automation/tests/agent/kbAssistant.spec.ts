import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';
import { ENV } from '../../utils/env';
import { KbAssistantPage } from '../../pages/agents/KbAssistantPage';

test.describe('KB Assistant Chat', () => {
  test('Agent should ask question in KB Assistant', async ({ page, loginPage }) => {
    const kbAssistant = new KbAssistantPage(page);

    await page.goto(ENV.BASE_URL);
    await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PASSWORD);

    await kbAssistant.openKbAssistant();
    await kbAssistant.askQuestion('can you tell me about gift certificates');

    await expect(page.locator('text=gift')).toBeVisible({ timeout: 15000 });
  });
});
