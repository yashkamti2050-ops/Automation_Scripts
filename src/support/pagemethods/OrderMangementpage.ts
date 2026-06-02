import { Location, Locator, Page, expect } from '@playwright/test';
// import { Fixtures } from './Fixtures';
export class ordermangementpage {

    orderButton: Locator
    searchButton: Locator
    neworderbutton: Locator

    constructor(private page: Page) {
        this.orderButton = this.page.locator('[data-i18n="orders"]');
        this.searchButton = this.page.locator('.btn-label-sm').filter({ hasText: 'Search' });
        this.neworderbutton = this.page.locator('[data-test-id="new-orders-button"]');
    }

    async omNavigate() {
        await this.orderButton.click();

    }

    async actionButtonClick() {
        await expect(this.orderButton).toBeVisible();
        await this.orderButton.click();
    }

    async searchButtonClick() {
        await expect(this.orderButton).toBeVisible();
        await this.orderButton.click();
        await expect(this.searchButton).toBeVisible();
        await expect(this.neworderbutton).toBeVisible();
        await this.neworderbutton.click();
        await expect(this.page).toHaveURL('https://ll-reactivate-staging-env.web.app/cashier-home');
    }
}