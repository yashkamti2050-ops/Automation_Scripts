import { Locator, Page, expect } from "@playwright/test";
import { testData } from '../../support/Datastorage/testdata';
export class LoginPage {

    continueEmail: Locator;
    signinEmail: Locator;
    continueButton: Locator;
    passwordField: Locator;
    loginButton: Locator;
    cashier: Locator;
    navPanel: Locator;
    restaurantName: Locator;


    constructor(private page: Page) {

        this.continueEmail = this.page.getByRole('button', { name: 'Continue with email' });
        this.signinEmail = this.page.getByTestId('signin-email-field');
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
        this.passwordField = this.page.getByTestId('password');
        this.loginButton = this.page.getByTestId('login-button');
        this.cashier = this.page.getByText('Cashier');
        this.navPanel = this.page.getByTestId('nav-panel');
        this.restaurantName = this.page.getByRole('button', { name: 'Clan-AP Restaurant' });

    }

    async navigateThroughLoginPage() {
        await this.page.goto('/');
        await this.page.waitForLoadState('domcontentloaded');
        // await this.page.waitForLoadState('networkidle');
        await expect(this.continueEmail).toBeVisible({ timeout: 10000 });
        await this.continueEmail.click();
        await expect(this.signinEmail).toBeVisible();
        await this.signinEmail.fill(testData.validUser.username);
        await this.continueButton.click();
        await expect(this.passwordField).toBeVisible();
        await this.passwordField.fill(testData.validUser.password);
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
        await expect(this.restaurantName).toBeVisible();
        await this.restaurantName.click();
        await expect(this.navPanel).toBeVisible({ timeout: 30000 });
    }
    async confirmOnHomePage() {
        await this.page.goto('/');
        await expect(this.navPanel).toBeVisible({
            timeout: 30000
        });
    }





}


