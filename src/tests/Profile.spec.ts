import { test, expect } from '../support/fixture/Fixtures';


test.describe('Profile Page', () => {
    test.beforeEach(async ({ login, profilepage }) => {
        await login.loginpageNavigate();
        await login.login_Page();
        await profilepage.HamburgerIcon();
        await profilepage.ProfileTab();
    });

    test('click', async ({ profilepage }) => {
        await profilepage.FirstName();
        await profilepage.LastName();
        await profilepage.EmailTextfield();
        await profilepage.MobileNumber();
        await profilepage.Lang();
    });
});

