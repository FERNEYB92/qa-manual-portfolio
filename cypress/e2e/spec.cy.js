import loginPage from '../pages/LoginPage';

describe('Proyecto Práctico #6 - Login aplicando Page Object Model (POM)', () => {

  beforeEach(function () {
    cy.fixture('users').as('userData');
    loginPage.visit();
  });

  it('Debe validar que la página cargue correctamente', () => {
    loginPage.logo.should('be.visible');
  });

  it('Debe realizar el login exitoso utilizando la abstracción de POM', function () {
    // Usamos la acción encapsulada en la clase de la página
    loginPage.login(this.userData.validUser.username, this.userData.validUser.password);

    // Validaciones post-login
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('be.visible').and('have.text', 'Products');
  });

});