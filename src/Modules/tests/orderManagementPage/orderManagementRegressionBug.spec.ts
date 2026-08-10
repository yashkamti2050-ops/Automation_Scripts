import { HomePage } from '../../../page/HomePage/HomePage';
import { test } from '../../../support/fixture/Fixtures';


test.describe('Order Management Page Functionality Test', () => {

    test.beforeEach(async ({ login, }) => {
        await login.confirmOnHomePage();


    });

   test('Verify that  Split in equal part works as expected ', async ({homePage, orderMangementRegression }) => { 
    await homePage.payLaterTypeOrderCreation();
    await orderMangementRegression.verifyEqualPartSplitFlow();
    });

    test.skip('Verify split by item is working as expected', async ({homePage, orderMangementRegression})=> {
        await homePage.payLaterTypeOrderCreation();
        await orderMangementRegression.verifySplitByItemFlow();
    });
})

