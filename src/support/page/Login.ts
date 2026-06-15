import { Locator, Page, expect } from "@playwright/test";
import logindata from "../Datastorage/Cred.json";
export class LoginPage {
    ConitnueEmail: Locator
    SigninEmail: Locator
    ContinueButton: Locator
    Passwordfield: Locator
    LoginButton: Locator
    Cashier: Locator
    navPanel: Locator



    constructor(private page: Page) {
        this.ConitnueEmail = this.page.getByText('Continue with email');
        this.SigninEmail = this.page.locator('[data-test-id="signin-email-field"]');
        this.ContinueButton = this.page.getByText('Continue');
        this.Passwordfield = this.page.locator('[data-test-id="password"]');
        this.LoginButton = this.page.locator('[data-test-id="login-button"]');
        this.Cashier = this.page.getByText('Cashier');
        this.navPanel = this.page.locator('[data-test-id="nav-panel"]');


    }


    async loginpageNavigate() {
        await this.page.goto('https://ll-reactivate-staging-env.web.app/');
    }
    async login_Page() {
        await this.page.waitForTimeout(4000);
        await this.ConitnueEmail.click();
        await this.page.waitForTimeout(3000);

        await expect(this.SigninEmail).toBeVisible();
        await this.SigninEmail.fill(logindata.Validuser.Username);
        await this.ContinueButton.click();
        await this.page.waitForTimeout(3000);
        await expect(this.Passwordfield).toBeVisible();
        await this.Passwordfield.fill(logindata.Validuser.Password);
        await expect(this.LoginButton).toBeVisible();
        await this.LoginButton.click();
        await this.page.waitForTimeout(3000);
        await this.page.waitForLoadState('networkidle');
        await this.Cashier.click();
        await this.page.waitForTimeout(6000);
        await this.page.getByRole('button', { name: 'Clan-AP Restaurant' }).click();
        await this.page.waitForTimeout(10000);
        await expect(this.navPanel).toBeVisible();

    }
}


// locator('[data-test-id="toast-message"]')