import { test } from '../../../support/fixture/Fixtures';



test.describe('Order Management Page Functionality Test', () => {

    test.beforeEach(async ({ login, }) => {
        await login.confirmOnHomePage();


    });
    // Skipped because of backend issues which are still not fixed. 
    test.skip('Verify the Payment status of order cards', async ({ orderManagementPage }) => {

        await orderManagementPage.verifyNavigationToOrderPage();
        await orderManagementPage.verifyOrderDetailPopup();
    });

})

