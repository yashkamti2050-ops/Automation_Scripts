import { expect, Page } from "@playwright/test";
import { HomePageApi } from "../../../api/HomePageApi";
import { test } from '../../../support/fixture/Fixtures';
import { AuthApi } from "../../../api/AuthApi";
import { request } from "http";
import { testData } from "../../../support/Datastorage/testdata";



test("Create Cash Order through API", async ({ homePageApi }) => {
    const arr = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.orderCreation(arr.login.apiKey);
    await homePageApi.validateApiResponse(response);
});

test("Create Pay Late Order through API", async ({ homePageApi }) => {


    const arr = await homePageApi.setupAuthenticatedApi();
    const response = await homePageApi.payLaterOrderCreation(arr.login.apiKey);
    await homePageApi.validateApiResponse(response);

});