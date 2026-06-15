import { test, expect } from '../support/fixture/Fixtures';
import { HomePage } from '../support/pagemethods/HomePage';

test.describe('Card Payment', () => {

    // test.beforeEach('Login and navigate', async ({ login }) => {
    //     await login.loginpageNavigate();
    //     await login.login_Page();
    // });

    // test.only('Card payment flow', async ({ page }) => {
    //     const homePage = new HomePage(page);
    //     await homePage.createCardorder();
    // });


    test.only('Cash payment flow', async ({ page, login }) => {
        const homePage = new HomePage(page);
        await login.loginpageNavigate();
        await login.login_Page();
        await homePage.createCardorder();
    });



});