import playwrightConfig from "../playwright.config"
import { test, expect } from '@playwright/test';
import { LoginPage } from "../src/page/Login";
import { testData } from "../src/page/testdata/testdata";

test.describe('Login', () => {
  let loginpage: LoginPage;
  test.beforeEach('Login functionality', async ({ page }) => {
    loginpage = new LoginPage(page);
   await loginpage.loginpageNavigate();
  })

  test('Login functionality flow', async ({ page }) => {
   await loginpage.login(testData.ValidUser.Username, testData.ValidUser.Password);

  })

});





















// test('Login Test', async ({ page }) => {
//   await page.goto('https://ll-reactivate-staging-env.web.app/');
//   console.log(await page.title());

// });

// test.beforeEach('Login', async ({ page }) => {
//   await page.goto('https://ll-reactivate-staging-env.web.app/');
//   console.log(await page.title());
//   await page.getByText('Continue with email').click();
//   await expect(page.locator('[data-test-id="signin-email-field"]')).toBeVisible();
//   await page.locator('[data-test-id="signin-email-field"]').fill('Manpreet.bains@lovingloyalty.com');
//   await page.getByText('Continue').click();
//   await expect(page.locator('[data-test-id="password"]')).toBeVisible();
//   await page.locator('[data-test-id="password"]').fill('1504');
//   await expect(page.locator('[data-test-id="login-button"]')).toBeVisible();
//   await page.locator('[data-test-id="login-button"]').click();
//   await page.getByText('Cashier').click();
//   await page.getByRole('button', { name: 'Clan-AP Restaurant' }).click();

// });

// test.only('Order Creation', async ({ page }) => {
//   await expect(page.locator('button.spinner-plus').nth(2)).toBeVisible();
//   await page.locator('button.spinner-plus').nth(2).click();
//   await page.locator('[class="fa fa-coins"]').click();
//   await page.getByRole('button', { name: 'PLACE ORDER' }).click();
//   await page.getByRole('button', { name: 'Exact amount' }).click();
//   await page.getByRole('button', { name: 'Skip tip' }).click();

// });
// //

