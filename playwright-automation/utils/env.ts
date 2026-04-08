import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const ENV = {
  BASE_URL: process.env.BASE_URL ?? 'https://dev.olivebranchtech.ai/qa/',
  LOGIN_PATH: process.env.LOGIN_PATH ?? '/login',
  DASHBOARD_PATH: process.env.DASHBOARD_PATH ?? '/agent/dashboard',
  CLIENT_EMAIL: process.env.CLIENT_EMAIL ?? 'harsh.singh@intelegencia.com',
  CLIENT_PASSWORD: process.env.CLIENT_PASSWORD ?? 'Intel@01',
};
