import { test as base } from '@playwright/test';
import { Page } from '@playwright/test';
import { LoginPage } from '../../page/LoginPage/Login';
import { ProfilePage } from '../../page/ProfilePage/ProfilePage';
import { OrderManagementPage } from '../../page/OrderManagementPage/OrderManagementPage';
import { HomePage } from '../../page/HomePage/HomePage';
import { ensureAuthenticated } from '../helper/authHelper' // 
import { orderManagementRegressionBug} from '../../page/OrderManagementPage/orderManagementRegressionBug';
import { HomePageApi } from '../../api/HomePageApi';
import { request } from 'http';


type MyFixtures = {
    login: LoginPage;
    authenticatedPage: Page;
    orderManagementPage: OrderManagementPage;
    profilePage: ProfilePage;
    homePage: HomePage;
    orderMangementRegression: orderManagementRegressionBug; 
    homePageApi: HomePageApi;
}

export const test = base.extend<MyFixtures>({

    login: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    },

    // This fixture does nothing but guarantee you're logged in
    authenticatedPage: async ({ page }, use) => {
        await ensureAuthenticated(page);  //This LINE does the login check 
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
    },

    orderMangementRegression: async({page}, use ) => {
            const orderMangementRegression = new orderManagementRegressionBug(page);
            await use(orderMangementRegression);
    },
    
    homePageApi: async({request}, use ) => {
            const homePageApi = new HomePageApi(request);
            await use(homePageApi);
        },
    });


