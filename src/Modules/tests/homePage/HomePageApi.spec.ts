import { test } from '../../../support/fixture/Fixtures';




test("Create Cash Order through API", async ({ homePageApi }) => {
    const array = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.cashOrderCreation(array.login.apiKey);
    await homePageApi.validateApiResponse(response);
});

test("Create Pay Late Order through API", async ({ homePageApi }) => {
    const array = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.payLaterOrderCreation(array.login.apiKey);
    await homePageApi.validateApiResponse(response);

});

test("Create Voucher Pay Order through API", async({homePageApi}) => {
    const array = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.voucherOrderCreation(array.login.apiKey);
    console.log(response);
    await homePageApi.validateApiResponse(response);
});

test("Create EatIn Order through API", async({homePageApi}) => {
    const array = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.eatInOrderCreation(array.login.apiKey);
    await homePageApi.validateApiResponse(response);
}
)