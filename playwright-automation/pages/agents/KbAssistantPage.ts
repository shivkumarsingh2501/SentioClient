import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class KbAssistantPage extends BasePage {
  readonly kbAssistantMenu: Locator;
  readonly chatInput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    super(page);

    this.kbAssistantMenu = page.locator('a[href="/agent/ai-chatbot"]');
    this.chatInput = page.locator('textarea#chat-input');
    this.sendButton = page.locator('button[title="Send message"]');
  }

  async openKbAssistant() {
    await this.kbAssistantMenu.click();
    await expect(this.chatInput).toBeVisible();
  }

  async askQuestion(question: string) {
    await this.chatInput.fill(question);
    await this.sendButton.click();
  }
}
