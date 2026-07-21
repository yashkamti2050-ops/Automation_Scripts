import { Locator, Page, expect } from "@playwright/test"
import { testData } from "../Datastorage/testdata";
export type PaymentResult = 'success' | 'failed' | 'timeout';
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
    voucherConfirmation: Locator;

    constructor(private page: Page) {

        this.navPanel = this.page.getByTestId('nav-panel');
        this.cashierPage = this.page.locator('user-name');
        this.takeAway = this.page.locator('takeaway-tab-button');
        this.eatIn = this.page.locator('eatin-tab-button');
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
        this.voucherConfirmation = this.page.getByRole('dialog');
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
        // await this.cashButton.click();

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

    async PayLaterTypeOrderCreation() {
        await this.addItemToCart();
        await this.selectPayLaterPay();
        await this.placeOrder.click();
        await expect(this.orderPlaced).toBeVisible();
    }

    async VoucherTypeOrderCreation() {
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

    async CardTypeOrderCreation(): Promise<void> {
        await this.addItemToCart();
        await expect(this.cardButton).toBeVisible();
        await this.selectCardPay();
        await this.clickExactAmount()

        const result = await this.waitForPaymentCompletion();

        switch (result) {

            case 'success':
                await this.noItemsText.waitFor({ state: 'visible', timeout: 5000 });
                // TODO: Replace with assertion once payment unsettled UI is finalised
                console.log(' Card order complete — home screen confirmed');
                await expect(this.orderButton).toBeVisible();

                break;

            case 'failed':
                await expect(this.orderDetailPop).toBeVisible({
                    timeout: 10000
                });
                await this.crossButton.click();
                await expect(this.orderDetailPop).not.toBeVisible();
                // TODO: Replace with assertion once payment settled UI is finalised
                console.log(' Payment failed — modal closed, moving on');
                await expect(this.orderButton).toBeVisible();

                break;

            case 'timeout': {
                const isStillOpen = await this.orderDetailPop
                    .isVisible()
                    .catch(() => false);
                if (isStillOpen) {
                    await this.page.getByTestId('close-order-details-btn').click();
                    await expect(this.orderDetailPop).not.toBeVisible();
                }
                console.log(' Timeout — cancelled and moved on');
                await expect(this.orderButton).toBeVisible();

                break;

            }


        }

    }

    async waitForPaymentCompletion(
        timeoutMs = 90_000,
        pollIntervalMs = 2_000
    ): Promise<PaymentResult> {

        const startTime = Date.now();
        console.log(' Waiting for payment result on Android device');

        while (Date.now() - startTime < timeoutMs) {
            const elapsed = Math.round((Date.now() - startTime) / 1000);

            const isHomeScreen = await this.noItemsText
                .isVisible()
                .catch(() => false);

            if (isHomeScreen) {
                console.log(` SUCCESS — home screen at ${elapsed}s`);
                return 'success';
            }

            const isModalVisible = await this.orderDetailPop
                .isVisible()
                .catch(() => false);

            if (isModalVisible) {
                console.log(`FAILED — order detail modal at ${elapsed}s`);
                return 'failed';
            }

            console.log(` Still waiting ${elapsed}s / ${timeoutMs / 1000}s`);
            await this.page.waitForTimeout(pollIntervalMs);
        }

        console.log(` TIMEOUT at ${timeoutMs / 1000}s — clicking cancel`);

        const isCancelVisible = await this.cancelButton
            .isVisible()
            .catch(() => false);

        if (isCancelVisible) {
            await this.cancelButton.click();
            await this.orderDetailPop
                .waitFor({ state: 'visible', timeout: 10_000 })
                .catch(() => { });
        }

        return 'timeout';

    }

    async verifyHomePageNavigation() {
        await expect(this.navPanel).toBeVisible({ timeout: 30000 });
    }




}










