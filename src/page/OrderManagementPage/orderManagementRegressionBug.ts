import { Locator, Page, expect } from "@playwright/test";

import { HomePage } from "../HomePage/HomePage";

export class  orderManagementRegressionBug {

    orderButton: Locator;
    searchButton: Locator;
    newOrderButton: Locator;
    actionButton: Locator;
    backButton: Locator;
    orderCard: Locator;
    closeButton: Locator;
    addButton: Locator;
    readyButton: Locator;
    payButton: Locator;
    paymentSettled: Locator;
    paymentUnsettled: Locator;
    paymentBox: Locator;
    receiptButton: Locator;
    orderModel: Locator;
    searchForOrder: Locator;
    unspecified: Locator;
    otherAmount: Locator;
    actionDropdownOptions: Locator;
    paymentStatus: Locator;
    splitButton: Locator;
    splitDialog: Locator;
    splitEqualPart: Locator;
    splitByItem: Locator;
    itemCheckBox: Locator;
    continueButton: Locator;
    finalCashButton: Locator;
    enterNumberOfPage: Locator;
    keyPadButton: Locator;
    keyPadContinueButton: Locator;
    splitContinueButton: Locator;

    constructor(private page: Page) {
        this.orderButton = this.page.getByTestId('cashier-home-orders-trigger');
        this.searchButton = this.page.getByTestId('orders-button');
        this.newOrderButton = this.page.getByTestId('new-orders-button');
        this.actionButton = this.page.getByTestId('actions-button');
        this.backButton = this.page.getByTestId('close-button');
        this.orderCard = this.page.getByTestId('order-card').first();
        this.closeButton = this.page.getByTestId('closed-button-order-card');
        this.addButton = this.page.getByTestId('add-button-order-card');
        this.readyButton = this.page.getByTestId('ready-button-order-card');
        this.payButton = this.page.getByTestId('pay-button-order-card');
        this.paymentSettled = this.page.locator('.payment-item.settled');
        this.paymentUnsettled = this.page.locator('.payment-item.unsettled');
        this.paymentBox = this.page.getByTestId('payment-box');
        this.receiptButton = this.page.getByTestId('receipt-button');
        this.orderModel = this.page.getByTestId('order-details-modal');
        this.searchForOrder = this.page.locator('.search-form-title', { hasText: 'Search for order' });
        this.otherAmount = this.page.getByTestId('other-amount-btn');
        this.unspecified = this.page.getByTestId('unspecified-open-btn');
        this.actionDropdownOptions = this.page.locator('.actions-menu');
        this.paymentStatus = this.page.getByTestId('status-of-payment');
        this.splitButton = this.page.getByTestId('split-button');
        this.splitDialog = this.page.getByRole('dialog');
        this.splitEqualPart = this.page.getByTestId('split-equal-parts-btn');
        this.splitByItem = this.page.getByTestId('split-by-items-btn');
        this.itemCheckBox = this.page.locator('.split-item-checkbox').nth(0);
        this.continueButton = this.page.locator('.form-button');
        this.finalCashButton = this.page.getByTestId('finalize-cash');
        this.enterNumberOfPage = this.page.getByTestId('number-keypad-title')
        this.keyPadButton = this.page.getByTestId('number-keypad-digit-2')
        this.keyPadContinueButton = this.page.getByTestId('keypad-submit-btn');
        this.splitContinueButton = this.page.getByRole('button', { name: 'Continue' });
}
async verfiyOrderModel(){
  await this.orderButton.click();
    await this.orderCard.click();
    await expect(this.orderModel).toBeVisible();
    await expect(this.splitButton).toBeVisible();
    await this.splitButton.click();
    await expect(this.splitDialog).toBeVisible();
}
    

  async verifyEqualPartSplitFlow(){
    await this.verfiyOrderModel();
    await expect(this.splitEqualPart).toBeVisible();
    await this.splitEqualPart.click();
    await expect(this.enterNumberOfPage).toBeVisible();
    await this.keyPadButton.click();
    await this.keyPadContinueButton.click();
}
  async verifySplitByItemFlow(){
    await this.verfiyOrderModel();
    await expect(this.splitByItem).toBeVisible();
    await this.splitByItem.click();
    await expect(this.splitDialog).toBeVisible();
    await expect(this.itemCheckBox).toBeVisible();
    await this.itemCheckBox.click();
    await expect(this.splitContinueButton).toBeVisible();
    await this.splitContinueButton.click();
    await this.backButton.click();

  }

}