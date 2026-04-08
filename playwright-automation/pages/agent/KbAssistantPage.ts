import { Locator, Page } from '@playwright/test';
import { safeClick, safeFill } from '../../utils/commonActions';

export class KbAssistantPage {
  readonly assistantLauncher: Locator;
  readonly messageInput: Locator;
  readonly sendButton: Locator;

  constructor(private page: Page) {
    this.assistantLauncher = page.locator('text=KB Assistant').first();
    this.messageInput = page.locator('textarea, input[placeholder*="Ask"], input[placeholder*="question"]');
    this.sendButton = page.getByRole('button', { name: /(send|ask|submit)/i }).first();
  }

  async openKbAssistant() {
    await safeClick(this.assistantLauncher);
    await this.page.waitForLoadState('networkidle');
  }

  async askQuestion(question: string) {
    await safeFill(this.messageInput, question);
    await safeClick(this.sendButton);
  }

  async waitForAnswerContaining(text: string) {
    await this.page.locator(`text=${text}`).waitFor({ state: 'visible', timeout: 20000 });
  }
}
