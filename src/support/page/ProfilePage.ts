import { Locator, Page, expect } from '@playwright/test';
import { Fixtures } from '@playwright/test';
import profileData from '../Datastorage/Cred.json'
export class ProfilePage {

  navPanel: Locator
  profileButton: Locator
  firstName: Locator
  lastName: Locator
  emailTextfield: Locator
  emailInput: Locator
  cancelButton: Locator
  mobileNumber: Locator
  mobileInput: Locator
  langChange: Locator



  constructor(private page: Page) {
    this.page.setDefaultTimeout(10000);
    this.navPanel = this.page.locator('[data-test-id="nav-panel"]');
    this.profileButton = this.page.locator('[data-test-id="profile-setting-button"]');
    this.firstName = this.page.locator('[data-test-id="profile-first-name"]')
    this.lastName = this.page.locator('[data-test-id="profile-last-name"]');
    this.emailTextfield = this.page.locator('[data-test-id="email-change-btn"]');
    this.emailInput = this.page.locator('[data-test-id="change-email-input"]');
    this.cancelButton = this.page.locator('[data-test-id="contact-modal-close-btn"]');
    this.mobileNumber = this.page.locator('[data-test-id="mobile-phone-change-btn"]');
    this.mobileInput = this.page.locator('[data-test-id="change-phone-input"]');
    this.langChange = this.page.locator('[data-test-id="language-dropdown"]');
  }



  async HamburgerIcon() {
    await this.navPanel.waitFor({ state: 'visible' });
    await this.navPanel.click();
  }
  async ProfileTab() {
    await expect(this.profileButton.last()).toBeVisible();
    await this.profileButton.last().click();

  }
  async FirstName() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill('Yash');
  }
  async LastName() {
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill('K');
  }
  async EmailTextfield() {
    await expect(this.emailTextfield).toBeVisible();
    await this.emailTextfield.click();
    await this.emailInput.fill(profileData.ProfileData.usernameEmail);
    await this.cancelButton.click();

  }
  async MobileNumber() {
    await this.mobileNumber.click();
    await expect(this.mobileInput).toBeVisible();
    await this.mobileInput.fill(profileData.ProfileData.PhoneNumber);
    await this.cancelButton.click();

  }
  async Lang() {
    await expect(this.langChange).toBeVisible();
    await this.langChange.click();
    await this.page.getByRole('option', { name: "English" }).click();

  }
}
