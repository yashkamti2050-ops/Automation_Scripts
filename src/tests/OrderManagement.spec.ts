import { test, expect } from '../support/fixture/Fixtures';
import { LoginPage } from '../support/pagemethods/Login';
import { ordermangementpage } from '../support/pagemethods/OrderMangementpage';

test.describe('Order managemnet page', () => {
    test.beforeEach(async ({ login, orderManagementPage }) => {
        await login.loginpageNavigate();
        await login.login();
        await orderManagementPage.omNavigate();

    });
    test ('click', async ({ orderManagementPage }) => {
        await orderManagementPage.actionButtonClick();
        await orderManagementPage.searchButtonClick();
    });
})
