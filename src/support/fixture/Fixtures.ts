import { test as base } from '@playwright/test';
import { Page } from '@playwright/test';
import { LoginPage } from '../page/Login';
import { ProfilePage } from '../page/ProfilePage';
import { OrderManagementPage } from '../page/OrderManagementPage';
import { HomePage } from '../page/HomePage';
import { ensureAuthenticated } from '../helper/authHelper' // 


type MyFixtures = {
    login: LoginPage;
    authenticatedPage: Page;
    orderManagementPage: OrderManagementPage;
    profilePage: ProfilePage;
    homePage: HomePage;
}

export const test = base.extend<MyFixtures>({

    login: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    },

    // This fixture does nothing but guarantee you're logged in
    authenticatedPage: async ({ page }, use) => {
        await ensureAuthenticated(page);
        await use(page);

    },

    orderManagementPage: async ({ page,  }, use) => {
        const orderManagementPage = new OrderManagementPage(page);
        await use(orderManagementPage);
    },

    profilePage: async ({ page,  }, use) => {
        const profilePage = new ProfilePage(page);
        await use(profilePage);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }

});
