import { test } from '../support/fixture/Fixtures';


test.describe('paymentVerificationFlow', () => {

    test.beforeEach(async ({ login, }) => {
        await login.loginPageNavigate();


    });

    test('verifyPaymentStatus', async ({ orderManagementPage }) => {

        await orderManagementPage.navigateToOrderPage();
        await orderManagementPage.clickOnOrderCard();
        await orderManagementPage.checkPaymentStatus();


    });

})

