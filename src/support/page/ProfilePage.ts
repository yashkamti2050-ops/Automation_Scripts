import { Locator, Page, expect } from '@playwright/test';
import { testData } from '../Datastorage/testdata';
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
    this.navPanel = this.page.getByTestId('nav-panel');
    this.profileButton = this.page.getByTestId('profile-setting-button');
    this.firstName = this.page.getByTestId('profile-first-name');
    this.lastName = this.page.getByTestId('profile-last-name');
    this.emailTextfield = this.page.getByTestId('email-change-btn');
    this.emailInput = this.page.getByTestId('change-email-input');
    this.cancelButton = this.page.getByTestId('contact-modal-close-btn');
    this.mobileNumber = this.page.getByTestId('mobile-phone-change-btn');
    this.mobileInput = this.page.getByTestId('change-phone-input');
    this.langChange = this.page.getByTestId('language-dropdown');

  }



  async openNavPanel() {
    await this.navPanel.waitFor({ state: 'visible' });
    await this.navPanel.click();
  }
  async clickProfileTab() {
    await expect(this.profileButton.last()).toBeVisible();
    await this.profileButton.last().click();

  }
  async enterFirstName() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(testData.ProfileName.FirstName);
  }
  async enterLastName() {
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(testData.ProfileName.LastName);
  }
  async changeEmailTextfield() {
    await expect(this.emailTextfield).toBeVisible();
    await this.emailTextfield.click();
    await this.emailInput.fill(testData.ProfileData.UserName);
    await this.cancelButton.click();

  }
  async changeMobileNumber() {
    await this.mobileNumber.click();
    await expect(this.mobileInput).toBeVisible();
    await this.mobileInput.fill(testData.ProfileData.Phone_Num);
    await this.cancelButton.click();

  }
  async changeLanguage() {
    await expect(this.langChange).toBeVisible();
    await this.langChange.click();
    await this.page.getByRole('option', { name: "English" }).click();

  }
}
