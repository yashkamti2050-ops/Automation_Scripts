import { test } from '../support/fixture/Fixtures';


test.describe('Payments Flow', () => {


    test.beforeEach('Login and navigate to home page', async ({ login }) => {
        await login.homePageConfirmation();
    });


    test('Check Cash Payment flow', async ({ homePage }) => {
        await homePage.createCashOrder();
    });

    test('Check Pay later Payment Flow', async ({ homePage }) => {

        await homePage.createLaterOrder();
    });

    test('Check Voucher payment flow', async ({ homePage }) => {
        await homePage.createVoucherOrder();
    });


    test.skip('Check Card payment flow', async ({ homePage }) => {
        await homePage.createCardOrder();
    });


})

//.domcontentloaded 