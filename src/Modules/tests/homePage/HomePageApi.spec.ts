import { test, expect, request } from "@playwright/test";
import { AuthApi } from "../../../api/AuthApi";
import { HomePageApi } from "../../../api/HomePageApi";
import { testData } from "../../../support/Datastorage/testdata";

test("Create Cash Order through API", async () => {

    // Create API context
    const api = await request.newContext();

    // Create Auth API object
    const authApi = new AuthApi(api);

    // Login and get API key
    const login = await authApi.login(
        testData.validUser.username,
        testData.validUser.password
    );

    // Create Home Page API object
    const homePageApi = new HomePageApi(api);

    // Create Cash Order
    const response = await homePageApi.orderCreation(
        login.apiKey
    );

    // Verify HTTP response
    expect(response.ok()).toBeTruthy();

    // Read response body
    const orderBody = await response.json();

    // Print response so we can understand it
    console.log(JSON.stringify(orderBody, null, 2));

    // Basic API response assertion
    expect(orderBody.status).toBeTruthy();
});