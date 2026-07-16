import { LoginPage } from '../page/Login';
import { Page } from "@playwright/test";

export async function isSessionExpired(page: Page) {
    return page.url().includes("/login");
}

export async function ensureAuthenticated(page: Page) {

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState('domcontentloaded');
    const loggedIn = await page
        .getByTestId("nav-panel")
        .isVisible({ timeout: 80000 })
        .catch(() => false);

    if (loggedIn) {
        console.log("Already logged in.");
        return;
    }

    console.log("Session expired. Logging in again...");

    const loginPage = new LoginPage(page);

    await loginPage.navigateThroughLoginPage();

    await page.context().storageState({
        path: "src/page/auth/login.json"
    });
}
  