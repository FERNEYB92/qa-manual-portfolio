class LoginPage {
  // 1. Elementos (Locators)
  get usernameInput() {
    return cy.get('[data-test="username"]');
  }

  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  get logo() {
    return cy.get('.login_logo');
  }

  // 2. Acciones (Methods)
  visit() {
    cy.visit('https://www.saucedemo.com');
  }

  fillUsername(username) {
    this.usernameInput.type(username);
  }

  fillPassword(password) {
    this.passwordInput.type(password);
  }

  clickLogin() {
    this.loginButton.click();
  }

  // Método compuesto para realizar el login en un solo llamado
  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();