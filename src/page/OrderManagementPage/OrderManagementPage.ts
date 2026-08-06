import { Locator, Page, expect } from "@playwright/test";

export class OrderManagementPage {

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
    }

    async verifyNavigationToOrderPage() {
        await this.orderButton.click();
        await expect(this.newOrderButton).toBeVisible();
    }

    async verifyActionButtonclick() {
        await expect(this.actionButton).toBeVisible();
        await this.actionButton.click();
        await expect(this.actionDropdownOptions).toBeVisible();
    }
    async verifyOrderDetailPopup() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
        await expect(this.orderCard).toBeVisible();
        await this.orderCard.click();
        await expect(this.orderModel).toBeVisible();

    }

    async verifyPaymentCard() {
        await expect(this.paymentBox).toBeVisible();
        await this.paymentBox.click();
    }

    async verifyPaymentStatus() {
        await expect(this.paymentStatus).toBeVisible();
        
    }


    async verifySearchForOrderPageNavigation() {
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();
        await expect(this.searchForOrder).toBeVisible();
    }






}