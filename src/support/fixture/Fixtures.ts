import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../page/Login';
import { ProfilePage} from '../page/ProfilePage';
import { ordermangementpage } from '../page/OrderMangementpage';
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