import { test, expect } from '../support/fixture/Fixtures';
import { LoginPage } from '../support/pagemethods/Login';
import { HomePage } from '../support/pagemethods/HomePage';

test.describe('Login', () => {

  test.beforeEach('Login functionality', async ({ login }) => {
    await login.loginpageNavigate();
  })

  test('Login functionality flow', async ({ login }) => {
    await login.login_Page();
  })



});













