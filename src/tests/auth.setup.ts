import { test } from '../support/fixture/Fixtures';


test.only('authenticate', async ({ login, page }) => {
    await login.navigateThroughLoginPage();

    await page.context().storageState({
        path: 'src/page/auth/login.json'
    });


})