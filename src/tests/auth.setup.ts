import { test } from '../support/fixture/Fixtures';


test('authenticate', async ({ login, page }) => {
    await login.loginPageNavigate();
    await login.homePageConfirmation();
    await page.context().storageState({
        path: 'src/page/auth/login.json',
    });

})