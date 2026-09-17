import { APIRequestContext } from "@playwright/test";
import { APITestData } from "../support/Datastorage/ApiTestData";

export class OrderManagementApi {
    constructor(private api: APIRequestContext) {}

    async refundPayment(
        apiKey: string,
        paymentId: number,
        amount: number,
        requestingUserId: number
    ) {
        const response = await this.api.post(
            `${APITestData.apiBaseUrl}/places/${APITestData.placeId}/payments/${paymentId}/refunds`,
            {
                headers: {
                    "api-key": apiKey,
                    "content-type": "application/json",
                },
                data: {
                    placeId: APITestData.placeId,
                    paymentId: paymentId,
                    amount: amount,
                    status: "Settled",
                    receiptNumber: `refund-${crypto.randomUUID()}`,
                    requestingUserId: requestingUserId,
                    description: "Customer request",
                },
            }
        );

        return response;
    }
}