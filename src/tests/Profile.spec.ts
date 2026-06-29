import { test } from '../support/fixture/Fixtures';


test.describe('Profile Page  ', () => {
    test.beforeEach(async ({ login }) => {
        await login.confirmOnHomePage();

    });

    test(' Verify Profile Page Text Fields', async ({ profilePage }) => {
        await profilePage.verifyNavPanelClick();
        await profilePage.verifyProfileTabClick();
        await profilePage.verifyFirstNameEntered();
        await profilePage.verifyLastNameEntered();
        await profilePage.verifyEmailModified();
        await profilePage.verifyMobileNumberModified();
        await profilePage.verifyLanguageModified();
    });
});

