import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const ENV = {
  BASE_URL: process.env.BASE_URL ?? 'https://dev.olivebranchtech.ai/qa/',
  CLIENT_EMAIL: process.env.CLIENT_EMAIL ?? 'Aman.jain@intelegencia.com',
  CLIENT_PASSWORD: process.env.CLIENT_PASSWORD ?? 'Intel@01'
};
