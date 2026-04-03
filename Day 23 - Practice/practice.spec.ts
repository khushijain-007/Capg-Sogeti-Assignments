import { test, expect } from '@playwright/test';

test('presentation', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const nameInput = page.locator('#name');
  await nameInput.fill('Kristen');
  await expect(nameInput).toHaveValue('Kristen');

  const femaleRadio = page.locator('#female');
  await femaleRadio.check();
  await expect(femaleRadio).toBeChecked();

  const mondayCheckbox = page.locator('#monday');
  await mondayCheckbox.check();
  await expect(mondayCheckbox).toBeChecked();

  const countryDropdown = page.locator('#country');
  await countryDropdown.selectOption('india');
  await expect(countryDropdown).toHaveValue('india');

  page.on('dialog', async dialog => {
    await expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.locator('#alertBtn').click();

  const table = page.locator('//h2[text()="Static Web Table"]/following::table[1]');
  await expect(table).toContainText('Selenium');
  await expect(table).toContainText('Java');

  expect(10 + 5).toBe(15);
});