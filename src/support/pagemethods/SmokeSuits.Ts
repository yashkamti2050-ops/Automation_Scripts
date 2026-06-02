import { Page, expect } from "@playwright/test";
export class SmokeSuit {
    constructor(private page: Page) {}
    
  async loginpageNavigate() {
        await this.page.goto('https://ll-reactivate-staging-env.web.app/');
    }
    async VisibleElements() {
        await expect(this.page.locator('[data-test-id="Logo"]')).toBeVisible();
        await expect(this.page.locator('[data-test-id="mobile-field"]')).toBeVisible();
        await this.page.locator('[data-test-id="mobile-field"]').click();
        await this.page.locator('[data-test-id="mobile-field"]').fill('74282182821');
        await expect(this.page.locator('[data-test-id="mobile-field-continue-button"]')).toBeVisible();
        await expect(this.page.locator('[data-test-id="email-button"]')).toBeVisible();
        await this.page.locator('[data-test-id="email-button"]').click();
        await expect(this.page.locator)
        
    }
    }


