describe('Proyecto Práctico #6 - Login con Data-Driven Testing (Fixtures)', () => {

  beforeEach(function () {
    // Cargar el archivo de datos antes de cada prueba
    cy.fixture('users').as('userData');
    cy.visit('https://www.saucedemo.com');
  });

  it('Debe realizar login consumiendo credenciales desde un Fixture JSON', function () {
    // Acceder a los datos cargados mediante la alias 'userData'
    cy.get('[data-test="username"]').type(this.userData.validUser.username);
    cy.get('[data-test="password"]').type(this.userData.validUser.password);
    cy.get('[data-test="login-button"]').click();

    // Validación post-login
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('be.visible').and('have.text', 'Products');
  });

});