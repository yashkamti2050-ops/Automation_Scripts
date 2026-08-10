import { APIRequestContext } from "@playwright/test";

export class HomePageApi {

    constructor(private api: APIRequestContext) {}

    async orderCreation(apiKey: string) {

        const response = await this.api.post(
            'https://test.lovingloyalty.com/api/places/75558/orders?_format=json&source=https%3A%2F%2Ftest.lovingloyalty.com',
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
                    payment_method: 'cash',
                },
            }
        );

        return response;
    }
}