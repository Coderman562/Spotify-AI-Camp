import { test, expect } from '@playwright/test';

test('FormPage should submit successfully', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Fill out form fields
  await page.fill('#firstName', 'John');
  await page.fill('#middleName', 'Doe');
  await page.fill('#lastName', 'Smith');
  // await page.fill('#hoursVolunteered', '2');
  // await page.fill('#date', '2023-04-23');
  // await page.fill('#phoneNumber', '1234567890');
  // await page.fill('#email', 'john.doe@example.com');
  // await page.fill('#address', '123 Main St');
  // await page.fill('#notes', 'Test notes');

  // Click submit button
  await page.click('.submit-btn');

  // Check for a success message or any other desired outcome after form submission
  // (This part depends on how your app handles form submissions)
});
