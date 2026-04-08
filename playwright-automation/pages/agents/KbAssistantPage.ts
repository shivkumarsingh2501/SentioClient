import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class KbAssistantPage extends BasePage {
  readonly kbAssistantMenu: Locator;
  readonly chatInput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    super(page);

    this.kbAssistantMenu = page.locator('a[href*="ai-chatbot"], a[href*="/client/ai-chatbot"], a[href*="/agent/ai-chatbot"]');
    this.chatInput = page.locator('textarea#chat-input, textarea[placeholder*="Ask"], input[placeholder*="Ask"]');
    this.sendButton = page.getByRole('button', { name: /(send|ask|submit)/i }).first();
  }

  async openKbAssistant() {
    if (await this.kbAssistantMenu.count() > 0) {
      await this.kbAssistantMenu.first().click();
    } else {
      await this.page.goto('/client/ai-chatbot');
    }

    await expect(this.chatInput).toBeVisible({ timeout: 20000 });
  }

  async askQuestion(question: string) {
    await this.chatInput.fill(question);
    await this.sendButton.click();
  }
}
