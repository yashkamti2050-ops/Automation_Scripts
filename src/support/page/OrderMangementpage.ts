import { Locator, Page, expect } from '@playwright/test';
// import { Fixtures } from './Fixtures';
export class ordermangementpage {

    orderButton: Locator
    searchButton: Locator
    newOrderButton: Locator
    actionButton: Locator;
    backButton: Locator;

    constructor(private page: Page) {
        this.page.setDefaultTimeout(10000);
        this.orderButton = this.page.locator('[data-test-id="cashier-home-orders-trigger"]');
        this.searchButton = this.page.locator('[data-test-id="orders-button"]');
        this.newOrderButton = this.page.locator('[data-test-id="new-orders-button"]');
        this.actionButton = this.page.locator('[data-test-id="actions-button"]');
        this.backButton = this.page.locator('[data-test-id="close-button"]');


    }


    async omNavigate() {
        await this.orderButton.click();

    }

    async actionButtonClick() {
        await expect(this.actionButton).toBeVisible();
        await this.actionButton.click();
    }

    async searchButtonClick() {
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();
        await this.backButton.click();
        await expect(this.newOrderButton).toBeVisible();
        await this.newOrderButton.click();
        await expect(this.page).toHaveURL('https://ll-reactivate-staging-env.web.app/cashier-home');
    }
}