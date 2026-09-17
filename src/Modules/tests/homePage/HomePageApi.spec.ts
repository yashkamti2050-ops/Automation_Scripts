import { test } from '../../../support/fixture/Fixtures';
import { APITestData } from "../../../support/Datastorage/ApiTestData"




test("Create Cash Order through API", async ({ homePageApi }) => {
    const authResult = await homePageApi.setupAuthenticatedApi();
    const result = await homePageApi.createCashOrder(
        authResult.login.apiKey,
        APITestData.Amount,
        APITestData.User_Id
    );

    await homePageApi.validateApiResponse(result.paymentResponse);

    
});

test("Create Pay Late Order through API", async ({ homePageApi }) => {
    const authResult = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.payLaterOrderCreation(authResult.login.apiKey);
    await homePageApi.validateApiResponse(response);

});

// test("Create Voucher Pay Order through API", async({homePageApi}) => {
//     const authResult = await homePageApi.setupAuthenticatedApi();
//     const response = await homePageApi.voucherOrderCreation(authResult.login.apiKey);
   
//     await homePageApi.validateApiResponse(response);
// });

test("Create EatIn Order through API", async({homePageApi}) => {
    const authResult = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.eatInOrderCreation(authResult.login.apiKey);
    await homePageApi.validateApiResponse(response);
}
)