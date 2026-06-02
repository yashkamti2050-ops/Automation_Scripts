import { Locator, Page, expect } from '@playwright/test';
import { Fixtures } from '@playwright/test';
import profileData from '../Datastorage/Cred.json'
export class ProfilePage {

  Navpanel: Locator
  ProfileButton: Locator
  firstName: Locator
  lastName: Locator
  emailTextfield: Locator
  emailInput: Locator
  CancelButton: Locator
  mobileNumber: Locator
  mobileinput: Locator
  Langchange: Locator



  constructor(private page: Page) {
    this.Navpanel = this.page.locator('[data-test-id="nav-panel"]');
    this.ProfileButton = this.page.locator('[data-test-id="profile-setting-button"]');
    this.firstName = this.page.locator('[data-test-id="profile-first-name"]')
    this.lastName = this.page.locator('[data-test-id="profile-last-name"]');
    this.emailTextfield = this.page.locator('[data-test-id="email-change-btn"]');
    this.emailInput = this.page.locator('[data-test-id="change-email-input"]');
    this.CancelButton = this.page.locator('[data-test-id="contact-modal-close-btn"]');
    this.mobileNumber = this.page.locator('[data-test-id="mobile-phone-change-btn"]');
    this.mobileinput = this.page.locator('[data-test-id="change-phone-input"]');
    this.Langchange = this.page.locator('[data-test-id="language-dropdown"]');
  }



  async HamburgerIcon() {
    await this.Navpanel.waitFor({ state: 'visible' });
    await this.Navpanel.click();
  }
  async ProfileTab() {
    await expect(this.ProfileButton.last()).toBeVisible();
    await this.ProfileButton.last().click();

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
    await this.CancelButton.click();

  }
  async MobileNumber() {
    await this.mobileNumber.click();
    // await expect(this.mobileinput).toBeVisible();
    await this.mobileinput.fill(profileData.ProfileData.PhoneNumber);
    await this.CancelButton.click();

  }
  async Lang() {
    await expect(this.Langchange).toBeVisible();
    await this.Langchange.click();
    await this.page.getByRole('option', { name: "English" }).click();

  }
}
