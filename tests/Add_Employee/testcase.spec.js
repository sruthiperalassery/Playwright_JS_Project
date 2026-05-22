// Import test and expect from Playwright package
const LoginPage = require('../../pages/LoginPagePOM.js');

const { test } = require('../../Generic_Lib/BaseClass');

const { expect } = require('@playwright/test');

test('Valid Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await  loginPage.enterUsername();
});