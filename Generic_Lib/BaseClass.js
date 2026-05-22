const { test, expect } = require('@playwright/test');

const config = require('../Test_Data/config');

test.beforeEach(async ({ page }) => {

    console.log('BeforeEach Started');

    console.log(config.baseURL);

    await page.goto(config.baseURL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    console.log('URL Opened Successfully');

});

module.exports = { test, expect };