import { APIRequestContext, expect } from "@playwright/test";
import { testData } from "../support/Datastorage/testdata";
import { AuthApi } from "../api/AuthApi";
import { APITestData } from "../support/Datastorage/ApiTestData";

export class HomePageApi {
    constructor(private api: APIRequestContext) {}

    async setupAuthenticatedApi() {
        const authApi = new AuthApi(this.api);

        const login = await authApi.login(
            testData.validUser.username,
            testData.validUser.password
        );

        return { login };
    }

    async orderData(
        apiKey: string,
        paymentMethod: string
    ) {
        const idempotencyKey = `oc_${crypto.randomUUID()}`;

        const response = await this.api.post(
            `${APITestData.apiBaseUrl}/places/${APITestData.placeId}/orders`,
            {
                headers: {
                    "api-key": apiKey,
                    "content-type": "application/json",
                },
                data: {
                    customer_id: 0,
                    order_items: [
                        {
                            menu_item_id: APITestData.menuItemId,
                            quantity: 1,
                            status: null,
                        },
                    ],
                    type: "Takeaway",
                    channel: "Web",
                    source: "Cashier",
                    payment_method: paymentMethod,
                    idempotency_key: idempotencyKey,
                },
            }
        );

        return {
            response,
            idempotencyKey,
        };
    }

    async cashPayment(
        apiKey: string,
        orderId: number,
        amount: number,
        requestingUserId: number
    ) {
        const response = await this.api.post(
            `${APITestData.apiBaseUrl}/places/${APITestData.placeId}/payments`,
            {
                headers: {
                    "api-key": apiKey,
                    "content-type": "application/json",
                },
                data: {
                    amount,
                    cardNumber: null,
                    cardType: null,
                    cashback: 0,
                    change: 0,
                    commission: 0,
                    customerReference: null,
                    description: null,
                    direction: "credit",
                    externalLink: null,
                    merchantReference: null,
                    paymentForId: orderId,
                    paymentForType: "order",
                    paymentTerminalId: null,
                    placeId: APITestData.placeId,
                    provider: null,
                    receiptNumber: `cash-${crypto.randomUUID()}`,
                    received: amount,
                    requestingUserId,
                    requiresSignature: false,
                    status: "Settled",
                    tip: 0,
                    type: "cash",
                    idempotency_key: `pc_${crypto.randomUUID()}`,
                },
            }
        );

        return response;
    }

    async voucherPayment(
        apiKey: string,
        orderId: number,
        voucherId: number,
        amount: number
    ) {
        const response = await this.api.post(
            `${APITestData.apiBaseUrl}/places/${APITestData.placeId}/payments/order/${orderId}`,
            {
                headers: {
                    "api-key": apiKey,
                    "content-type": "application/json",
                },
                data: {
                    amount,
                    cashback: 0,
                    direction: "credit",
                    receipt_number: `voucher-${crypto.randomUUID()}`,
                    received: amount,
                    status: "Settled",
                    tip: 0,
                    type: "voucher",
                    voucher_id: voucherId,
                },
            }
        );

        return response;
    }

    async createCashOrder(
        apiKey: string,
        amount: number,
        requestingUserId: number
    ) {
        // Create order
        const orderData = await this.orderData(
            apiKey,
            "cash"
        );

        // Get order ID
        const orderBody = await orderData.response.json();
        const orders = orderBody["node.order"];

        const order = (
            Object.values(orders) as {
                id: number;
                idempotency_key: string;
            }[]
        ).find(
            order => order.idempotency_key === orderData.idempotencyKey
        );

        if (!order) {
            throw new Error(
                `Order not found for idempotency key: ${orderData.idempotencyKey}`
            );
        }

        const orderId = order.id;

        // Make cash payment
        const paymentResponse = await this.cashPayment(
            apiKey,
            orderId,
            amount,
            requestingUserId
        );

        // Get payment ID
        const paymentBody = await paymentResponse.json();
        const payments = paymentBody["node.payment"];

        const payment = (
            Object.values(payments) as {
                id: number;
                payment_for_id: number;
            }[]
        ).find(
            payment => payment.payment_for_id === orderId
        );

        if (!payment) {
            throw new Error(
                `Payment not found for order ID: ${orderId}`
            );
        }

        const paymentId = payment.id;

        return {
            orderId,
            paymentId,
            paymentResponse,
        };
    }

    async payLaterOrderCreation(apiKey: string) {
        return this.orderData(
            apiKey,
            "later"
        );
    }

    async eatInOrderCreation(apiKey: string) {
        const response = await this.api.post(
            `${APITestData.apiBaseUrl}/places/${APITestData.placeId}/orders`,
            {
                headers: {
                    "api-key": apiKey,
                    "content-type": "application/json",
                },
                data: {
                    customer_id: 0,
                    order_items: [
                        {
                            menu_item_id: APITestData.menuItemId,
                            quantity: 1,
                            addons: [],
                            removed_ingredients: [],
                            instructions: [],
                            status: null,
                        },
                    ],
                    type: "Eat In",
                    channel: "Web",
                    source: "Cashier",
                    payment_method: "later",
                    table_id: APITestData.Table_No,
                    idempotency_key: `oc_${crypto.randomUUID()}`,
                },
            }
        );

        return response;
    }

    async validateApiResponse(response: any) {
        console.log("STATUS:", response.status());
        console.log("BODY:", await response.text());

        expect(response.ok()).toBeTruthy();
    }
}