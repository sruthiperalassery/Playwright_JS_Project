class LoginPage {

    constructor(page) {

        // page object
        this.page = page;

        // Locators
        this.usernameInput = page.getByLabel('Username');

        this.passwordInput = page.getByPlaceholder('Password');

        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.errorMessage = page.locator('.error-msg');
    }

    // Methods / Actions

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLogin();
    }
}

module.exports = LoginPage;