import { test, expect } from '../support/fixture/Fixtures';
import { LoginPage } from '../support/pagemethods/Login';

test.describe('Login', () => {

  test.beforeEach('Login functionality', async ({ login }) => {
    await login.loginpageNavigate();
  })

  test('Login functionality flow', async ({ login }) => {
    await login.login();

  })

});













