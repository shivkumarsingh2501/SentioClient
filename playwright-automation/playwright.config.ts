import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL ?? 'https://dev.olivebranchtech.ai/qa/',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
