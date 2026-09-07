import { APIRequestContext, expect, request } from "@playwright/test";
import { testData } from "../support/Datastorage/testdata";
import { AuthApi } from "../api/AuthApi";
import { APITestData } from "../support/Datastorage/ApiTestData";


export class HomePageApi {

    constructor(private api: APIRequestContext) {
    }


    async orderData(
        apiKey: string,
        paymentMethod: string,
        pickupTime?: number,
        voucherCode?: number
    ) {

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

                    type: "Takeaway",
                    channel: "Web",
                    source: "Cashier",
                    payment_method: paymentMethod,
                },
            }
        );

        return response;
    }


    async setupAuthenticatedApi() {

        const api = await request.newContext();

        const authApi = new AuthApi(api);

        const login = await authApi.login(
            testData.validUser.username,
            testData.validUser.password
        );

        return {
            login
        };
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
                    amount: amount,
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


    async validateApiResponse(response: any) {

      

        expect(response.ok()).toBeTruthy();
    }


    async cashOrderCreation(apiKey: string) {

        return this.orderData(
            apiKey,
            "cash"
        );
    }


    async payLaterOrderCreation(apiKey: string) {

        return this.orderData(
            apiKey,
            "later",
            1786424983
        );
    }


    async voucherOrderCreation(apiKey: string) {

        const response = await this.orderData(
            apiKey,
            "voucher"
        );

        console.log("STATUS:", response.status());
        console.log("URL:", response.url());
        console.log("CONTENT-TYPE:", response.headers()["content-type"]);
        
        const responseText = await response.text();
        
        console.log("RESPONSE:", responseText.substring(0, 1000));
        
        const body = JSON.parse(responseText);
        
       

        const orders = body["node.order"];
        const order = Object.values(orders)[0] as { id: number };
        const orderId = order.id;

       

        const paymentResponse = await this.voucherPayment(

            apiKey,
            orderId,
            131509,
            100
        );



        return response;
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
                            menu_item_id: 75984,
                            quantity: 1,
                            addons: [],
                            removed_ingredients: [],
                            instructions: [],
                            status: null
                        }
                    ],
                    type: "Eat In",
                    channel: "Web",
                    source: "Cashier",
                    payment_method: "later",
                    table_id: 79986,
                    idempotency_key: `oc_${crypto.randomUUID()}`,
                
                },
            }
        );

        return response;
    }
}