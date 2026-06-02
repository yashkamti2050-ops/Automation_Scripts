import { Locator, Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import logindata from "../Datastorage/Cred.json";
export class LoginPage {
    ConitnueEmail: Locator
    SigninEmail: Locator
    ContinueButton: Locator
    Passwordfield: Locator
    LoginButton: Locator
    Cashier: Locator



    constructor(private page: Page) {
        this.ConitnueEmail = this.page.getByText('Continue with email');
        this.SigninEmail = this.page.locator('[data-test-id="signin-email-field"]');
        this.ContinueButton = this.page.getByText('Continue');
        this.Passwordfield = this.page.locator('[data-test-id="password"]');
        this.LoginButton = this.page.locator('[data-test-id="login-button"]');
        this.Cashier = this.page.getByText('Cashier')


    }


    async loginpageNavigate() {
        await this.page.goto('https://ll-reactivate-staging-env.web.app/');
    }
    async login() {
        await this.ConitnueEmail.click();
        await expect(this.SigninEmail).toBeVisible();
        await this.SigninEmail.fill(logindata.Validuser.Username);
        await this.ContinueButton.click();
        await expect(this.Passwordfield).toBeVisible();
        await this.Passwordfield.fill(logindata.Validuser.Password);
        await expect(this.LoginButton).toBeVisible();
        await this.LoginButton.click();
        await this.Cashier.click();
        await this.page.getByRole('button', { name: 'Clan-AP Restaurant' }).click();
    }
}