import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pagemethods/Login';
import { ProfilePage } from '../pagemethods/ProfilePage';
import { ordermangementpage } from '../pagemethods/OrderMangementpage';
import { testData } from '../Datastorage/testdata';

type MyFixtures = {
    login: LoginPage;
    orderManagementPage: ordermangementpage;
    profilepage: ProfilePage;
}

export const test = base.extend<MyFixtures>({

    login: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    },

    orderManagementPage: async ({ page }, use) => {
        const orderManagementPage = new ordermangementpage(page);
        await use(orderManagementPage);
    },

    profilepage: async ({ page }, use) => {
        const profilepage = new ProfilePage(page);
        await use(profilepage);
    }

});

export { expect } from '@playwright/test';