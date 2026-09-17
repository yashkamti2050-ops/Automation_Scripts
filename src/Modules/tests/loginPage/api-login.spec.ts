import { test, request } from '@playwright/test';
import { AuthApi } from '../../../api/AuthApi';
import { testData } from '../../../support/Datastorage/testdata';

test('Authenticate', async () => {

    const api = await request.newContext();

    const authApi = new AuthApi(api);

    const login = await authApi.login(
        testData.validUser.username,
        testData.validUser.password
    );

    console.log(login);

});