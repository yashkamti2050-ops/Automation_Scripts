import { Locator, Page, expect } from "@playwright/test";
import logindata from "../Datastorage/Cred.json";
export class LoginPage {
    conitnueEmail: Locator
    signinEmail: Locator
    continueButton: Locator
    passwordField: Locator
    loginButton: Locator
    Cashier: Locator
    navPanel: Locator



    constructor(private page: Page) {
        this.page.setDefaultTimeout(10000);
        this.conitnueEmail = this.page.getByText('Continue with email');
        this.signinEmail = this.page.locator('[data-test-id="signin-email-field"]');
        this.continueButton = this.page.getByText('Continue');
        this.passwordField = this.page.locator('[data-test-id="password"]');
        this.loginButton = this.page.locator('[data-test-id="login-button"]');
        this.Cashier = this.page.getByText('Cashier');
        this.navPanel = this.page.locator('[data-test-id="nav-panel"]');


    }


    async loginpageNavigate() {
        await this.page.goto('https://ll-reactivate-staging-env.web.app/');
    }
    async login_Page() {
        await this.conitnueEmail.click();

        await expect(this.signinEmail).toBeVisible();
        await this.signinEmail.fill(logindata.Validuser.Username);
        await this.continueButton.click();
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(logindata.Validuser.Password);
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        // await this.page.waitForLoadState('networkidle');
        await this.Cashier.click();
        await this.page.getByRole('button', { name: 'Clan-AP Restaurant' }).click();
        await expect(this.navPanel).toBeVisible();

    }
}


