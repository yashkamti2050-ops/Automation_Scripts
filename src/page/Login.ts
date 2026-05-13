import { Page } from "@playwright/test";
import{test,expect} from "@playwright/test";
export class LoginPage{
constructor(private page: Page ) {}


async loginpageNavigate(){
    await this.page.goto ('https://ll-reactivate-staging-env.web.app/');
}
 async login (email: string , password: string){
  await this.page.getByText('Continue with email').click();
  await expect(this.page.locator('[data-test-id="signin-email-field"]')).toBeVisible();
  await this.page.locator('[data-test-id="signin-email-field"]').fill('Manpreet.bains@lovingloyalty.com');
  await this.page.getByText('Continue').click();
  await expect(this.page.locator('[data-test-id="password"]')).toBeVisible();
  await this.page.locator('[data-test-id="password"]').fill('1504');
  await expect(this.page.locator('[data-test-id="login-button"]')).toBeVisible();
  await this.page.locator('[data-test-id="login-button"]').click();
  await this.page.getByText('Cashier').click();
  await this.page.getByRole('button', { name: 'Clan-AP Restaurant' }).click();
}
}