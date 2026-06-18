import { test } from '../support/fixture/Fixtures';


test.describe('Profile Page ', () => {
    test.beforeEach(async ({ login }) => {
        await login.loginPageNavigate();
        await login.homePageConfirmation();



    });

    test('Updated profile page text field', async ({ profilePage }) => {
        await profilePage.openNavPanel();
        await profilePage.clickProfileTab();
        await profilePage.enterFirstName();
        await profilePage.enterLastName();
        await profilePage.changeEmailTextfield();
        await profilePage.changeMobileNumber();
        await profilePage.changeLanguage();
    });
});

