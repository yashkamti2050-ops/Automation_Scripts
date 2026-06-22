import { Locator, Page, expect } from '@playwright/test';
export class OrderManagementPage {

    orderButton: Locator
    searchButton: Locator
    newOrderButton: Locator
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


    }


    async navigateToOrderPage() {
        await this.orderButton.click();
    }

    async clickActionButton() {
        await expect(this.actionButton).toBeVisible();
        await this.actionButton.click();
    }

    async clickOnSearchButton() {
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();
        await this.backButton.click();
        await expect(this.newOrderButton).toBeVisible();
        await this.newOrderButton.click();
        await expect(this.page).toHaveURL('/');
    }
    async clickOnOrderCard() {
        await expect(this.orderCard).toBeVisible();
        await this.orderCard.click();
    }

    async checkPaymentStatus() {
        await expect(this.orderModel).toBeVisible();
        await this.orderModel.evaluate(el => el.scrollTop = el.scrollHeight);
        await expect(this.paymentBox).toBeVisible();

        if (await this.paymentSettled.isVisible()) {
            console.log("Payment Completed");
        }

        else if (await this.paymentUnsettled.isVisible()) {

            console.log("Payment Failed")

        }

        else {
            throw new Error("Payment is still pending");
        }
    }






}









