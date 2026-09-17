import { test } from '../../../support/fixture/Fixtures';
import { APITestData } from "../../../support/Datastorage/ApiTestData"


test("Refund Cash Payment through API", async ({
    homePageApi,
    orderManagementApi
}) => {

    
    const auth = await homePageApi.setupAuthenticatedApi();


    const cashOrder = await homePageApi.createCashOrder(
        auth.login.apiKey,
        APITestData.Amount,
        APITestData.User_Id
    );

    const refundResponse = await orderManagementApi.refundPayment(
        auth.login.apiKey,
        cashOrder.paymentId,
        APITestData.Amount,
        APITestData.User_Id
    );


    await homePageApi.validateApiResponse(refundResponse);
});