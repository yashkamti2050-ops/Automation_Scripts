import { Locator,  Page, expect } from '@playwright/test';
// import { Fixtures } from './Fixtures';
export class ordermangementpage {

    orderButton: Locator
    searchButton: Locator
    newOrderbutton: Locator

    constructor(private page: Page) {
        this.orderButton = this.page.getByTestId('[data-i18n="orders"]');
        this.searchButton = this.page.getByTestId('.btn-label-sm').filter({ hasText: 'Search' });
        this.newOrderbutton = this.page.getByTestId('[data-test-id="new-orders-button"]');


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
        await expect(this.newOrderbutton).toBeVisible();
        await this.newOrderbutton.click();
        await expect(this.page).toHaveURL('https://ll-reactivate-staging-env.web.app/cashier-home');
    }
}