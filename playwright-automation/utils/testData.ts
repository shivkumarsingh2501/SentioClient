import { ENV } from './env';

export const TEST_USERS = {
  valid: {
    email: ENV.CLIENT_EMAIL,
    password: ENV.CLIENT_PASSWORD,
  },
};

export function getUser(type: 'valid' = 'valid') {
  return TEST_USERS[type];
}
