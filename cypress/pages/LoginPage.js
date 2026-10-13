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

  get inventoryTitle() {
    return cy.get('.title');
  }

  // 2. Acciones y Métodos
  visit() {
    cy.visit('https://www.saucedemo.com');
  }

  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  // Validación de ingreso exitoso
  verifyLoginSuccess() {
    cy.url().should('include', '/inventory.html');
    this.inventoryTitle.should('be.visible').and('have.text', 'Products');
  }
}

export default new LoginPage();