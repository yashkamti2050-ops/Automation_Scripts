import { Locator, Page, expect } from '@playwright/test';
import { Fixtures } from '@playwright/test';
import profileData from '../Datastorage/Cred.json'
export class ProfilePage {

  Navpanel: Locator
  ProfileButton: Locator
  firstName: Locator
  lastName: Locator
  EmailTextfield: Locator
  emailInput: Locator
  cancelButton: Locator
  mobileNumber: Locator
  mobileInput: Locator
  langChange: Locator



  constructor(private page: Page) {
    this.Navpanel = this.page.locator('[data-test-id="nav-panel"]');
    this.ProfileButton = this.page.locator('[data-test-id="profile-setting-button"]');
    this.firstName = this.page.locator('[data-test-id="profile-first-name"]')
    this.lastName = this.page.locator('[data-test-id="profile-last-name"]');
    this.EmailTextfield = this.page.locator('[data-test-id="email-change-btn"]');
    this.emailInput = this.page.locator('[data-test-id="change-email-input"]');
    this.cancelButton = this.page.locator('[data-test-id="contact-modal-close-btn"]');
    this.mobileNumber = this.page.locator('[data-test-id="mobile-phone-change-btn"]');
    this.mobileInput = this.page.locator('[data-test-id="change-phone-input"]');
    this.langChange = this.page.locator('[data-test-id="language-dropdown"]');
  }



  async hamburgerIcon() {
    await this.Navpanel.waitFor({ state: 'visible' });
    await this.Navpanel.click();
  }
  async profileTab() {
    await expect(this.ProfileButton.last()).toBeVisible();
    await this.ProfileButton.last().click();

  }
  async firstNameTextFiled() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill('Yash');
  }
  async lastNameTextFiled() {
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill('K');
  }
  async emailTextfield() {
    await expect(this.EmailTextfield).toBeVisible();
    await this.EmailTextfield.click();
    await this.emailInput.fill(profileData.ProfileData.usernameEmail);
    await this.cancelButton.click();

  }
  async mobileNumberFiled() {
    await this.mobileNumber.click();
    // await expect(this.mobileinput).toBeVisible();
    await this.mobileInput.fill(profileData.ProfileData.PhoneNumber);
    await this.cancelButton.click();

  }
  async languageChangeButton() {
    await expect(this.langChange).toBeVisible();
    await this.langChange.click();
    await this.page.getByRole('option', { name: "English" }).click();

  }
}