import { test } from '../../../support/fixture/Fixtures';


test.describe('Order Management Page Functionality Test', () => {

    test.beforeEach(async ({ login, }) => {
        await login.confirmOnHomePage();


    });

   test.skip('Verify that the Split by Item ', async ({orderMangementRegression }) => { 
    await orderMangementRegression.verifyEqualPartSplitFlow();
    });

    test.skip('Verify split by item is working as expected', async ({orderMangementRegression})=> {
        await orderMangementRegression.verifySplitByItemFlow();
    });
})

