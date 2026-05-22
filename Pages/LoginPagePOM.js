const fs = require('fs');
const { expect } = require('@playwright/test');
const config = require('../Test_Data/config');

class LoginPage {

    onstructor(page) {

        this.page = page;
        this.usernameTextbox = page.locator('input[name="username"]');

         this.passwordTextbox = page.locator('input[name="password"]');

        this.loginButton = page.locator('button[type="submit"]');
    }

    async enterUsername() {
        await expect(this.usernameTextbox).toBeVisible();
        console.log("element loaded");
        await this.usernameTextbox.fill(config.username);
    }

    async enterPassword() {

        await this.passwordTextbox.fill(config.password);
    }

    async clickLogin() {

       await this.loginButton.click();
    }

   
}

module.exports = LoginPage;