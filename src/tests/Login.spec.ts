import { test, expect } from '../support/fixture/Fixtures';
import { LoginPage } from '../support/page/Login';
import { HomePage } from '../support/page/HomePage';

test.describe('Login', () => {

  test.beforeEach('Login functionality', async ({ login }) => {
    await login.loginpageNavigate();
  })

  test.only('Login functionality flow', async ({ login }) => {
    await login.login_Page();
  })



});













