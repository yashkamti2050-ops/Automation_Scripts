import playwrightConfig from "../playwright.config"
import { test, expect } from '@playwright/test';
import { LoginPage } from "../src/page/Login";
import { testData } from "../src/page/testdata/testdata";

test('Multipleorders', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.loginpageNavigate();
    await loginpage.login(
        testData.ValidUser.Username,
        testData.ValidUser.Password
    );

    await expect(page.locator('button.spinner-plus').nth(2)).toBeVisible();
    await page.locator('[data-menu-section-id="75976"]').click();

    await page.locator('[data-test-id="increase-quantity-btn"]').nth(1).click();
    await page.locator('[data-test-id="increase-quantity-btn"]').nth(2).click();
    await page.locator('[data-test-id="increase-quantity-btn"]').nth(3).click();
    // await page.locator(".spinner-plus-btn").nth(3).click();
    // await page.locator(".spinner-plus-btn").nth(1).click();
    await page.locator ('[data-test-id="payment-btn-cash"]').click();
    await page.getByRole('button', { name: 'PLACE ORDER' }).click();
    await page.getByRole('button', { name: 'Exact amount' }).click();
    await page.locator ('[data-test-id="orders-button"]').click();
   


});