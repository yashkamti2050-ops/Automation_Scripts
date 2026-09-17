import { test } from '../../../support/fixture/Fixtures';
import { APITestData } from "../../../support/Datastorage/ApiTestData"


test.only("Refund Cash Payment through API", async ({
    homePageApi,
    orderManagementApi
}) => {

    // 1. Login
    const auth = await homePageApi.setupAuthenticatedApi();

    // 2. Create order + make cash payment
    const cashOrder = await homePageApi.createCashOrder(
        auth.login.apiKey,
        APITestData.Amount,
        APITestData.User_Id
    );

    // 3. Refund the payment
    const refundResponse = await orderManagementApi.refundPayment(
        auth.login.apiKey,
        cashOrder.paymentId,
        APITestData.Amount,
        APITestData.User_Id
    );

    // 4. Validate refund response
    await homePageApi.validateApiResponse(refundResponse);
});