// import { Locator, Page, expect } from "@playwright/test";


// export class orderManagementRegressionBug {

//   orderButton: Locator;
//   searchButton: Locator;
//   newOrderButton: Locator;
//   actionButton: Locator;
//   backButton: Locator;
//   orderCard: Locator;
//   closeButton: Locator;
//   addButton: Locator;
//   readyButton: Locator;
//   payButton: Locator;
//   paymentSettled: Locator;
//   paymentUnsettled: Locator;
//   paymentBox: Locator;
//   receiptButton: Locator;
//   orderModel: Locator;
//   searchForOrder: Locator;
//   unspecified: Locator;
//   otherAmount: Locator;
//   actionDropdownOptions: Locator;
//   paymentStatus: Locator;
//   splitButton: Locator;
//   splitDialog: Locator;
//   splitEqualPart: Locator;
//   splitByItem: Locator;
//   itemCheckBox: Locator;
//   continueButton: Locator;
//   finalCashButton: Locator;
//   enterNumberOfPart: Locator;
//   keyPadButton: Locator;
//   keyPadContinueButton: Locator;
//   splitContinueButton: Locator;
//   cancelSplitButton: Locator;
//   enterAmountPage: Locator;
//   crossButton: Locator;
//   collectAmountDialog: Locator;
//   keyPadBackButton: Locator;
//   showMyOrderButton: Locator;
//   splitDetail: Locator;


//   constructor(private page: Page) {
//     this.orderButton = this.page.getByTestId('cashier-home-orders-trigger');
//     this.searchButton = this.page.getByTestId('orders-button');
//     this.newOrderButton = this.page.getByTestId('new-orders-button');
//     this.actionButton = this.page.getByTestId('actions-button');
//     this.backButton = this.page.getByTestId('close-button');
//     this.orderCard = this.page.getByTestId('order-card').first();
//     this.closeButton = this.page.getByTestId('closed-button-order-card');
//     this.addButton = this.page.getByTestId('add-button-order-card');
//     this.readyButton = this.page.getByTestId('ready-button-order-card');
//     this.payButton = this.page.getByTestId('pay-button-order-card');
//     this.paymentSettled = this.page.locator('.payment-item.settled');
//     this.paymentUnsettled = this.page.locator('.payment-item.unsettled');
//     this.paymentBox = this.page.getByTestId('payment-box');
//     this.receiptButton = this.page.getByTestId('receipt-button');
//     this.orderModel = this.page.getByTestId('order-details-modal');
//     this.searchForOrder = this.page.locator('.search-form-title', { hasText: 'Search for order' });
//     this.otherAmount = this.page.getByTestId('other-amount-btn');
//     this.unspecified = this.page.getByTestId('unspecified-open-btn');
//     this.actionDropdownOptions = this.page.locator('.actions-menu');
//     this.paymentStatus = this.page.getByTestId('status-of-payment');
//     this.splitButton = this.page.getByTestId('split-button');
//     this.splitDialog = this.page.getByRole('dialog');
//     this.splitEqualPart = this.page.getByTestId('split-equal-parts-btn');
//     this.splitByItem = this.page.getByTestId('split-by-items-btn');
//     this.itemCheckBox = this.page.locator('.split-item-checkbox').nth(0);
//     this.continueButton = this.page.locator('.form-button');
//     this.finalCashButton = this.page.getByTestId('finalize-cash');
//     this.enterNumberOfPart = this.page.getByTestId('number-keypad-title')
//     this.keyPadButton = this.page.getByTestId('number-keypad-digit-2')
//     this.keyPadContinueButton = this.page.getByTestId('keypad-submit-btn');
//     this.splitContinueButton = this.page.getByRole('button', { name: 'Continue' });
//     this.cancelSplitButton = this.page.getByTestId('cancel-split-button')
//     this.enterAmountPage = this.page.getByTestId('keypad-container');
//     this.crossButton = this.page.getByLabel('Close');
//     this.collectAmountDialog = this.page.getByTestId("collect-amount-header");
//     this.keyPadBackButton = this.page.getByTestId("amount-keypad-back-btn");
//     this.showMyOrderButton = this.page.getByTestId('toggle-my-orders-btn');
//     this.splitDetail = this.page.getByRole('heading', { name: 'Splits (2)' })
//   }
  
//   async verfiyOrderModel() {
//     await this.orderButton.click();
//     await expect(this.actionButton).toBeVisible();
//     await this.actionButton.click();
//     await this.showMyOrderButton.click();
//     await this.orderCard.click();
//     await expect(this.orderModel).toBeVisible();
//     await expect(this.splitButton).toBeVisible({ timeout: 15000 });
//     await this.splitButton.click();
//     await expect(this.splitDialog).toBeVisible();
// }

//   async verfiySplitIsDone() {
//     await expect(this.actionButton).toBeVisible();
//     await this.actionButton.click();
//     await this.orderCard.click();
//     await expect(this.orderModel).toBeVisible();
//     await this.page.waitForTimeout(2000);
//     await expect(this.splitDetail).toBeVisible();
//     await this.splitDetail.hover();

//   }

//   async verifyEqualPartSplitFlow() {
//     await this.verfiyOrderModel();
//     await expect(this.splitEqualPart).toBeVisible();
//     await this.splitEqualPart.click();
//     await expect(this.enterNumberOfPart).toBeVisible();
//     await this.keyPadButton.click();
//     await this.keyPadContinueButton.click();
//     await expect(this.enterAmountPage).toBeVisible({ timeout: 15000 });
//     await this.finalCashButton.click();
//     await expect(this.collectAmountDialog).toBeVisible({ timeout: 15000 });
//     await expect(this.finalCashButton).toBeVisible();
//     await this.finalCashButton.click();
//     await expect(this.crossButton).toBeVisible({ timeout: 15000 });
//     await this.crossButton.click();
//     await this.verfiySplitIsDone();
// }
//   async verifySplitByItemFlow() {
//     await this.verfiyOrderModel();
//     await expect(this.splitByItem).toBeVisible();
//     await this.splitByItem.click();
//     await expect(this.splitDialog).toBeVisible();
//     await expect(this.itemCheckBox).toBeVisible();
//     await this.itemCheckBox.click();
//     await expect(this.splitContinueButton).toBeVisible();
//     await this.splitContinueButton.click();
//     await expect(this.keyPadBackButton).toBeVisible({ timeout: 13000 });
//     await this.keyPadBackButton.click();
//     await expect(this.crossButton).toBeVisible({ timeout: 10000 });
//     await this.crossButton.click();
//     await this.verfiySplitIsDone();


//   }

// }

import { Locator, Page, expect } from "@playwright/test";

export class OrderManagementRegressionBug {

    // =========================
    // Navigation
    // =========================

    private readonly orderButton: Locator;
    private readonly actionButton: Locator;
    private readonly showMyOrderButton: Locator;

    // =========================
    // Order
    // =========================

    private readonly orderCard: Locator;
    private readonly orderModel: Locator;

    // =========================
    // Split
    // =========================

    private readonly splitButton: Locator;
    private readonly splitDialog: Locator;
    private readonly splitEqualPart: Locator;
    private readonly splitByItem: Locator;
    private readonly itemCheckBox: Locator;

    // =========================
    // Equal Split
    // =========================

    private readonly enterNumberOfPart: Locator;
    private readonly keyPadButton: Locator;
    private readonly keyPadContinueButton: Locator;
    private readonly enterAmountPage: Locator;

    // =========================
    // Payment
    // =========================

    private readonly finalCashButton: Locator;
    private readonly collectAmountDialog: Locator;

    // =========================
    // Split By Item
    // =========================

    private readonly splitContinueButton: Locator;
    private readonly keyPadBackButton: Locator;

    // =========================
    // Common
    // =========================

    private readonly closeButton: Locator;
    private readonly splitDetail: Locator;


    constructor(private readonly page: Page) {

        // Navigation

        this.orderButton =
            this.page.getByTestId("cashier-home-orders-trigger");

        this.actionButton =
            this.page.getByTestId("actions-button");

        this.showMyOrderButton =
            this.page.getByTestId("toggle-my-orders-btn");


        // Order

        /*
         * .first() is intentional.
         *
         * In your application the newly created order appears
         * first in the Order Management list.
         */
        this.orderCard =
            this.page.getByTestId("order-card").first();

        this.orderModel =
            this.page.getByTestId("order-details-modal");


        // Split

        this.splitButton =
            this.page.getByTestId("split-button");

        this.splitDialog =
            this.page.getByRole("dialog");

        this.splitEqualPart =
            this.page.getByTestId("split-equal-parts-btn");

        this.splitByItem =
            this.page.getByTestId("split-by-items-btn");

        this.itemCheckBox =
            this.page.locator(".split-item-checkbox").first();


        // Equal Split

        this.enterNumberOfPart =
            this.page.getByTestId("number-keypad-title");

        this.keyPadButton =
            this.page.getByTestId("number-keypad-digit-2");

        this.keyPadContinueButton =
            this.page.getByTestId("keypad-submit-btn");

        this.enterAmountPage =
            this.page.getByTestId("keypad-container");


        // Payment

        this.finalCashButton =
            this.page.getByTestId("finalize-cash");

        this.collectAmountDialog =
            this.page.getByTestId("collect-amount-header");


        // Split By Item

        this.splitContinueButton =
            this.page.getByRole("button", {
                name: "Continue",
                exact: true
            });

        this.keyPadBackButton =
            this.page.getByTestId("amount-keypad-back-btn");


        // Common

        this.closeButton =
            this.page.getByLabel("Close");

        this.splitDetail =
            this.page.getByRole("heading", {
                name: "Splits (2)"
            });
    }


    // =========================================================
    // OPEN ORDER MANAGEMENT
    // =========================================================

    private async openOrderManagement(): Promise<void> {

        await expect(this.orderButton).toBeVisible({
            timeout: 15000
        });

        await this.orderButton.click();

        /*
         * After clicking Orders, wait until the Order Management
         * page is actually ready.
         */
        await expect(this.actionButton).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // OPEN MY ORDERS
    // =========================================================

    private async openMyOrders(): Promise<void> {

        await expect(this.actionButton).toBeVisible({
            timeout: 10000
        });

        await this.actionButton.click();

        /*
         * Don't immediately click My Orders.
         *
         * First prove that the action menu has opened.
         */
        await expect(this.showMyOrderButton).toBeVisible({
            timeout: 10000
        });

        await this.showMyOrderButton.click();

        /*
         * Wait for the order list to contain an order.
         *
         * Because the newly created order is the first card,
         * we intentionally use .first().
         */
        await expect(this.orderCard).toBeVisible({
            timeout: 20000
        });
    }


    // =========================================================
    // OPEN ORDER DETAILS
    // =========================================================

    private async openOrderDetails(): Promise<void> {

        await this.openOrderManagement();

        await this.openMyOrders();

        /*
         * At this point:
         *
         * Order Management loaded
         *       ↓
         * My Orders opened
         *       ↓
         * First order card visible
         *
         * Now click it.
         */

        await this.orderCard.click();

        /*
         * The click should result in the order details modal.
         */
        await expect(this.orderModel).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // OPEN SPLIT DIALOG
    // =========================================================

    private async openSplitDialog(): Promise<void> {

        await expect(this.splitButton).toBeVisible({
            timeout: 15000
        });

        await expect(this.splitButton).toBeEnabled({
            timeout: 10000
        });

        await this.splitButton.click();

        /*
         * Wait for split dialog to actually open.
         */
        await expect(this.splitDialog).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // VERIFY SPLIT COMPLETED
    // =========================================================

    private async verifySplitCompleted(): Promise<void> {

        /*
         * We intentionally DON'T use:
         *
         * await page.waitForTimeout(2000)
         *
         * because we don't want to guess how long the backend
         * operation takes.
         *
         * "Splits (2)" is the actual UI state we care about.
         */

        await expect(this.splitDetail).toBeVisible({
            timeout: 20000
        });
    }


    // =========================================================
    // CLOSE ORDER DETAILS
    // =========================================================

    private async closeOrderDetails(): Promise<void> {

        await expect(this.closeButton).toBeVisible({
            timeout: 15000
        });

        await this.closeButton.click();

        /*
         * Very important.
         *
         * Don't start the next operation until the previous
         * modal has actually disappeared.
         */
        await expect(this.orderModel).toBeHidden({
            timeout: 15000
        });
    }


    // =========================================================
    // EQUAL PART SPLIT
    // =========================================================

    async verifyEqualPartSplitFlow(): Promise<void> {

        // -----------------------------------------
        // Open Order
        // -----------------------------------------

        await this.openOrderDetails();


        // -----------------------------------------
        // Open Split
        // -----------------------------------------

        await this.openSplitDialog();


        // -----------------------------------------
        // Select Equal Parts
        // -----------------------------------------

        await expect(this.splitEqualPart).toBeVisible({
            timeout: 10000
        });

        await expect(this.splitEqualPart).toBeEnabled({
            timeout: 10000
        });

        await this.splitEqualPart.click();


        // -----------------------------------------
        // Enter Number Of Parts
        // -----------------------------------------

        await expect(this.enterNumberOfPart).toBeVisible({
            timeout: 10000
        });

        await expect(this.keyPadButton).toBeVisible({
            timeout: 10000
        });

        await expect(this.keyPadButton).toBeEnabled({
            timeout: 10000
        });

        await this.keyPadButton.click();


        // -----------------------------------------
        // Continue From Number Keypad
        // -----------------------------------------

        await expect(this.keyPadContinueButton).toBeVisible({
            timeout: 10000
        });

        await expect(this.keyPadContinueButton).toBeEnabled({
            timeout: 10000
        });

        await this.keyPadContinueButton.click();


        // -----------------------------------------
        // Enter Amount Page
        // -----------------------------------------

        await expect(this.enterAmountPage).toBeVisible({
            timeout: 20000
        });


        // -----------------------------------------
        // First Cash Payment
        // -----------------------------------------

        await expect(this.finalCashButton).toBeVisible({
            timeout: 15000
        });

        await expect(this.finalCashButton).toBeEnabled({
            timeout: 10000
        });

        await this.finalCashButton.click();


        // -----------------------------------------
        // Collect Amount Dialog
        // -----------------------------------------

        await expect(this.collectAmountDialog).toBeVisible({
            timeout: 20000
        });


        // -----------------------------------------
        // Final Cash
        // -----------------------------------------

        await expect(this.finalCashButton).toBeVisible({
            timeout: 15000
        });

        await expect(this.finalCashButton).toBeEnabled({
            timeout: 10000
        });

        await this.finalCashButton.click();


        // -----------------------------------------
        // Close Payment / Split UI
        // -----------------------------------------

        await this.closeOrderDetails();


        // -----------------------------------------
        // Re-open Order
        // -----------------------------------------

        await this.openOrderDetails();


        // -----------------------------------------
        // Final Verification
        // -----------------------------------------

        await this.verifySplitCompleted();
    }


    // =========================================================
    // SPLIT BY ITEM
    // =========================================================

    async verifySplitByItemFlow(): Promise<void> {

        // -----------------------------------------
        // Open Order
        // -----------------------------------------

        await this.openOrderDetails();


        // -----------------------------------------
        // Open Split
        // -----------------------------------------

        await this.openSplitDialog();


        // -----------------------------------------
        // Select Split By Item
        // -----------------------------------------

        await expect(this.splitByItem).toBeVisible({
            timeout: 10000
        });

        await expect(this.splitByItem).toBeEnabled({
            timeout: 10000
        });

        await this.splitByItem.click();


        // -----------------------------------------
        // Select Item
        // -----------------------------------------

        await expect(this.itemCheckBox).toBeVisible({
            timeout: 10000
        });

        await expect(this.itemCheckBox).toBeEnabled({
            timeout: 10000
        });

        await this.itemCheckBox.click();


        // -----------------------------------------
        // Continue
        // -----------------------------------------

        await expect(this.splitContinueButton).toBeVisible({
            timeout: 10000
        });

        await expect(this.splitContinueButton).toBeEnabled({
            timeout: 10000
        });

        await this.splitContinueButton.click();


        // -----------------------------------------
        // Amount Keypad
        // -----------------------------------------

        await expect(this.keyPadBackButton).toBeVisible({
            timeout: 20000
        });

        await expect(this.keyPadBackButton).toBeEnabled({
            timeout: 10000
        });

        await this.keyPadBackButton.click();


        // -----------------------------------------
        // Close
        // -----------------------------------------

        await this.closeOrderDetails();


        // -----------------------------------------
        // Re-open Order
        // -----------------------------------------

        await this.openOrderDetails();


        // -----------------------------------------
        // Final Verification
        // -----------------------------------------

        await this.verifySplitCompleted();
    }
}