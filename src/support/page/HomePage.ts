import { Locator, Page, expect } from "@playwright/test"
import { testData } from "../Datastorage/testdata";
export class HomePage {

    navPanel: Locator;
    cashierPage: Locator;
    orderButton: Locator;
    takeAway: Locator;
    eatIn: Locator;
    delivery: Locator;
    plusIcon: Locator;
    minusIcon: Locator;
    cardButton: Locator;
    cashButton: Locator;
    laterButton: Locator;
    moreButton: Locator;
    mobilePay: Locator;
    voucherButton: Locator;
    discountButton: Locator;
    totalBill: Locator;
    selectedItem: Locator;
    discountCode: Locator;
    notesButton: Locator;
    clearButton: Locator;
    exactAmount: Locator;
    otherAmount: Locator;
    unspecified: Locator;
    placeOrder: Locator;
    cashDropDown: Locator;
    moneyInOut: Locator;
    backButton: Locator;
    deleteIcon: Locator;
    voucherPage: Locator;
    keyPadButton: Locator;
    continueButton: Locator;
    orderDetailPop: Locator;
    cancelButton: Locator;
    noItemsText: Locator;
    crossButton: Locator;
    menuItem: Locator;
    collectAmountPopUp: Locator;
    paymentRegistered: Locator;
    orderPlaced: Locator;
    discountAmountText: Locator;
    yesButton: Locator;
    noButton: Locator;
    voucherConfirmation: Locator;
    table: Locator;
    eatInOrderConfirmation: Locator;
    confirmationDialog: Locator;
    confirmButton: Locator;

    constructor(private page: Page) {

        this.navPanel = this.page.getByTestId('nav-panel');
        this.cashierPage = this.page.locator('user-name');
        this.takeAway = this.page.locator('takeaway-tab-button');
        this.eatIn = this.page.getByTestId('eatin-tab-button')
        this.delivery = this.page.locator('delivery-tab-button');
        this.plusIcon = this.page.getByTestId('increase-quantity-btn').first();
        this.minusIcon = this.page.locator('decrease-quantity-btn');
        this.cardButton = this.page.getByTestId('payment-btn-card');
        this.cashButton = this.page.getByTestId('payment-btn-cash');
        this.laterButton = this.page.getByTestId('payment-btn-later');
        this.moreButton = this.page.locator('payment-btn-more');
        this.mobilePay = this.page.getByRole('button', { name: 'MobilePay' });
        this.voucherButton = this.page.getByRole('button', { name: 'Voucher' });
        this.discountButton = this.page.getByTestId('discount-button');
        this.totalBill = this.page.getByTestId('total-bill-btn');
        this.selectedItem = this.page.getByTestId('selected-items-btn');
        this.discountCode = this.page.getByTestId('discount-code-btn');
        this.notesButton = this.page.getByTestId('instructions-btn');
        this.clearButton = this.page.getByTestId('clear-cart-btn');
        this.exactAmount = this.page.getByTestId('exact-amount-btn');
        this.otherAmount = this.page.getByTestId('other-amount-btn');
        this.unspecified = this.page.getByTestId('unspecified-open-btn');
        this.placeOrder = this.page.getByTestId('place-order');
        this.cashDropDown = this.page.getByTestId('cash-dropdown-trigger');
        this.moneyInOut = this.page.getByTestId('cash-in-out-option');
        this.backButton = this.page.getByTestId('amount-keypad-back-btn');
        this.deleteIcon = this.page.getByTestId('remove-item-btn');
        this.voucherPage = this.page.locator('.keypad-container.keypad-container--fixed');
        this.keyPadButton = this.page.locator('.keypad-btn');
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
        this.orderDetailPop = this.page.locator('order-details-modal');
        this.cancelButton = this.page.getByTestId('loading-icon');
        this.noItemsText = this.page.locator('.cashier-rail-empty-state-text', { hasText: 'No items' });
        this.crossButton = this.page.getByTestId('order-details-close-btn');
        this.orderButton = this.page.getByTestId('cashier-home-orders-trigger');
        this.menuItem = this.page.locator('.cashier-rail-populated-cart-item-desc');
        this.collectAmountPopUp = this.page.getByTestId('collect-amount-header');
        this.paymentRegistered = this.page.locator('.swal2-title', { hasText: 'Payment registered' });
        this.orderPlaced = this.page.locator('.swal2-title', { hasText: 'order placed!' });
        this.discountAmountText = this.page.locator('.discount-amount');
        this.yesButton = this.page.getByTestId('yes-btn');
        this.noButton = this.page.getByTestId('no-btn');
        this.voucherConfirmation = this.page.getByRole('dialog');
        this.table = this.page.locator('div').filter({ hasText: /^6547$/ }).nth(1);
        this.confirmationDialog = this.page.getByRole('dialog');
        this.eatInOrderConfirmation = this.page.getByText('Placed unpaid — eat in orders');
        this.confirmButton = this.page.getByTestId('confirm-btn');


    }

    async addItemToCart() {
        await this.plusIcon.waitFor({ state: 'visible', timeout: 8000 });
        await this.plusIcon.click();
        await expect(this.menuItem).toBeVisible();

    }
    async clickExactAmount() {
        await expect(this.exactAmount).toBeVisible();
        await this.exactAmount.click();
    }

    async selectCashPay() {
        await expect(this.cashButton).toBeVisible();


    }
    async selectVoucherPay() {
        await expect(this.voucherButton).toBeVisible();
        await this.voucherButton.click();
    }

    async selectPayLaterPay() {
        await expect(this.laterButton).toBeVisible();
        await this.laterButton.click();

    }

    async selectCardPay() {
        await expect(this.cardButton).toBeVisible();
        await this.cardButton.click();
    }

    async clickPlaceOrderButton() {
        await expect(this.placeOrder).toBeVisible();
        await this.placeOrder.click();
    }

    async addDiscountToOrder() {
        await expect(this.discountCode).toBeVisible();
        await this.discountButton.click();
        await expect(this.totalBill).toBeVisible();
        await this.totalBill.click();
        await expect(this.discountAmountText).toBeVisible();
    }


    async cashTypeOrderCreation() {
        await this.addItemToCart();
        await this.selectCashPay();
        await this.clickPlaceOrderButton();
        await expect(this.collectAmountPopUp).toBeVisible();
        await this.clickExactAmount()
        await expect(this.paymentRegistered).toBeVisible();

    }

    async payLaterTypeOrderCreation() {
        await this.addItemToCart();
        await this.selectPayLaterPay();
        await this.placeOrder.click();
        await expect(this.orderPlaced).toBeVisible();
    }

    async voucherTypeOrderCreation() {
        await this.addItemToCart();
        await expect(this.voucherButton).toBeVisible();
        await this.selectVoucherPay();
        await this.clickPlaceOrderButton();
        await expect(this.voucherPage).toBeVisible();
        for (const digit of testData.voucher.code) {
            await this.keyPadButton.getByText(digit, { exact: true }).click();
        }
        await expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
        await expect(this.voucherConfirmation).toBeVisible();
        await this.yesButton.click();
        await expect(this.paymentRegistered).toBeVisible();
    }



    async verifyHomePageNavigation() {
        await expect(this.navPanel).toBeVisible({ timeout: 30000 });
    }

    async eatInOrderCreation() {
        await this.eatIn.click();
        await this.addItemToCart();
        await this.placeOrder.click();
        await expect(this.table).toBeVisible();
        await this.table.click();
        await this.confirmationDialog.waitFor({ state: 'visible', timeout: 3000 });
        if (await this.confirmationDialog.isVisible()) {
            await this.yesButton.click();
            await expect(this.confirmationDialog).toBeVisible();
        }
        else {
            await this.noButton.click();
        }
        await this.confirmButton.click();
        await expect(this.orderPlaced).toBeVisible();
    }



}










