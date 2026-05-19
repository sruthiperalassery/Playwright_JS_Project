// Import test and expect from Playwright package
const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

test('Valid Login Test', async ({ page }) => {

    // Open application
    await page.goto('https://example.com');

    // Create object of LoginPage
    const loginPage = new LoginPage(page);

    // Perform login
    await loginPage.login('admin', 'admin123');

    // Validation
    await expect(page).toHaveURL(/dashboard/);
});