import { test } from '../support/fixture/Fixtures';


test.describe('Order Management Page Functionality Test', () => {

    test.beforeEach(async ({ login, }) => {
        await login.confirmOnHomePage();


    });

    test('Verify the Payment status of order cards', async ({ orderManagementPage }) => {

        await orderManagementPage.verifyNavigationToOrderPage();
        await orderManagementPage.verifyOrderDetailPopup();
    });

})

