import { APIRequestContext, expect, request } from "@playwright/test";
import { testData } from "../support/Datastorage/testdata";
import { AuthApi } from "../api/AuthApi";
export class HomePageApi {

    constructor(private api: APIRequestContext) { 

    }


    async orderData(
        apiKey: any,
        paymentMethod: string,
        pickupTime?: number
    ){
        const response = await this.api.post(
            'https://backendtest.lovingloyalty.com/places/75558/orders',
            {
                headers: {
                    'api-key': apiKey,
                    'content-type': 'application/json',
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
                            status: null,
                        },
                    ],

                    type: 'Takeaway',
                    channel: 'Web',
                    source: 'Cashier',
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

    async validateApiResponse(response: any) {
        expect(response.ok).toBeTruthy();

        // Read response body
        const orderBody = await response.json();



        // Basic API response assertion
        if (typeof orderBody === 'object' && orderBody !== null && 'status' in orderBody) {
            expect(orderBody.status).toBeTruthy();
        } else {
            throw new Error('Invalid response body: Missing "status" property');
        }
    }

//     // CASH
    async orderCreation(apiKey: any) {

        return this.orderData(
            apiKey,
            'cash'
        );
    }


//     // PAY LATER
    async payLaterOrderCreation(apiKey: any) {

        return this.orderData(
            apiKey,
            'later',
            1786424983
        );
    }
}