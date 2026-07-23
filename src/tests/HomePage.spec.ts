import { test } from '../support/fixture/Fixtures';
import { HomePage } from '../support/page/HomePage';



test.describe('Home Page Payment Verification', () => {


    test.beforeEach('Login and navigate to home page', async ({ login }) => {
        await login.confirmOnHomePage();
    });

    test('Verify Cash Payment flow', async ({  homePage }) => {
        await homePage.cashTypeOrderCreation();
    });

    test('Verify Pay later Payment Flow', async ({ homePage }) => {
        await homePage.payLaterTypeOrderCreation();
    });

    test('Verify Voucher payment flow', async ({ homePage }) => {
        await homePage.voucherTypeOrderCreation();
    });


    test.skip('Verify Card payment flow', async ({ homePage }) => {
        await homePage.cardTypeOrderCreation();
    });

    test.skip('Verify Discount is added to order cart', async ({ homePage }) => {
        await homePage.cashTypeOrderCreation();
        await homePage.addDiscountToOrder()
    });

    test('Verify EatIn Order Flow', async ({ homePage }) => {
        await homePage.eatInOrder();
    });

})