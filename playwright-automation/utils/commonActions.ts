import { Locator } from '@playwright/test';

export async function safeClick(locator: Locator) {
  await locator.waitFor({ state: 'visible', timeout: 10000 });
  await locator.scrollIntoViewIfNeeded();
  await locator.click();
}

export async function safeFill(locator: Locator, value: string) {
  await locator.waitFor({ state: 'visible', timeout: 10000 });
  await locator.fill(value);
}
