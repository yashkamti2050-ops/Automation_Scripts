import { Locator, Page, expect } from '@playwright/test';
import { testData } from '../Datastorage/testdata';
export class ProfilePage {

  navPanel: Locator;
  profileButton: Locator;
  firstName: Locator;
  lastName: Locator;
  emailTextfield: Locator;
  emailInput: Locator;
  cancelButton: Locator;
  mobileNumber: Locator;
  mobileInput: Locator;
  langChange: Locator;
  settingTab: Locator;
  saveButton: Locator;
  profileUpdated: Locator;
  menuTab: Locator;



  constructor(private page: Page) {

    this.navPanel = this.page.getByTestId('nav-panel');
    this.menuTab = this.page.getByTestId('menu-tab-btn').last();
    this.profileButton = this.page.getByTestId('profile-setting-button');
    this.firstName = this.page.getByTestId('profile-first-name');
    this.lastName = this.page.getByTestId('profile-last-name');
    this.emailTextfield = this.page.getByTestId('email-change-btn');
    this.emailInput = this.page.getByTestId('change-email-input');
    this.cancelButton = this.page.getByTestId('contact-modal-close-btn');
    this.mobileNumber = this.page.getByTestId('mobile-phone-change-btn');
    this.mobileInput = this.page.getByTestId('change-phone-input');
    this.langChange = this.page.getByTestId('language-dropdown');
    this.settingTab = this.page.getByTestId('settings-tab-desktop');
    this.saveButton = this.page.getByTestId('profile-save-btn');
    this.profileUpdated = this.page.locator('.swal2-title', { hasText: 'Profile saved successfully' });


  }



  async verifyNavPanelClick() {
    await this.navPanel.waitFor({ state: 'visible' });
    await this.navPanel.click();
    await expect(this.menuTab).toBeVisible();
  }
  async verifyProfileTabClick() {

    const profileTab = this.profileButton.last();
    await expect(profileTab).toBeVisible();
    await profileTab.click();
  }
  async verifyFirstNameEntered() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(testData.profileName.firstName);
  }

  async verifyLastNameEntered() {
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(testData.profileName.lastName);

  }
  async verifyEmailModified() {
    await expect(this.emailTextfield).toBeVisible();
    await this.emailTextfield.click();
    await this.emailInput.fill(testData.profileData.email);
    await this.cancelButton.click();
    await expect(this.settingTab).toBeVisible();

  }
  async verifyMobileNumberModified() {
    await this.mobileNumber.click();
    await expect(this.mobileInput).toBeVisible();
    await this.mobileInput.fill(testData.profileData.phoneNumber);
    await this.cancelButton.click();
    await expect(this.settingTab).toBeVisible();
  }
  async verifyLanguageModified() {
    await expect(this.langChange).toBeVisible();
    await this.langChange.click();
    await this.page.getByRole('option', { name: "English" }).click();
    await this.saveButton.click();
    await expect(this.profileUpdated).toBeVisible();


  }
}
