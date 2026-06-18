import { test as base } from '@playwright/test';
import { LoginPage } from '../page/Login';
import { ProfilePage } from '../page/ProfilePage';
import { OrderManagementPage } from '../page/OrderManagementPage';
import { HomePage } from '../page/HomePage';

type MyFixtures = {
    login: LoginPage;
    orderManagementPage: OrderManagementPage;
    profilePage: ProfilePage;
    homePage: HomePage;
}

export const test = base.extend<MyFixtures>({

    login: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    },

    orderManagementPage: async ({ page }, use) => {
        const orderManagementPage = new OrderManagementPage(page);
        await use(orderManagementPage);
    },

    profilePage: async ({ page }, use) => {
        const profilePage = new ProfilePage(page);
        await use(profilePage);
    },

    homePage: async ({ page }, use) => {
        const Home_Page = new HomePage(page);
        await use(Home_Page);
    }


});

export { expect } from '@playwright/test';