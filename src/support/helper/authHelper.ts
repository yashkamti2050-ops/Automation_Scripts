import fs from 'fs';
import { LoginPage } from '../page/Login';
import { Page } from "@playwright/test";
export async function ensureAuthenticated(page: Page, loginPage: LoginPage) {
    await page.goto('/');

    const isLoggedIn = await page
        .locator('[data-testid="nav-panel"]')
        .isVisible()
        .catch(() => false);


    if (!isLoggedIn) {
        console.log('Session expired - re-authenticating...');

        // Delete old expired file (force: true = silent delete)
        fs.rmSync('src/page/auth/login.json', { force: true });

        // Actually log in again
        await loginPage.navigateThroughLoginPage();
        await loginPage.confirmOnHomePage();

        // Save the fresh state 
        await page.context().storageState({
            path: 'src/page/auth/login.json',
        });

        console.log('Re-authentication complete - new session saved')
    }
}