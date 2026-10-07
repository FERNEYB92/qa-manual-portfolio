describe('Proyecto Práctico #5 - Pruebas de Login en Swag Labs', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Debe cargar correctamente la página de inicio de sesión', () => {
    cy.get('.login_logo').should('be.visible');
  });

  it('Debe completar el login, validar redirección y tomar captura de evidencia', () => {
    // 1. Ingresar credenciales
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // 2. Validaciones post-login (Aserciones)
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('be.visible').and('have.text', 'Products');

    // 3. Captura de pantalla automática
    cy.screenshot('login-exitoso-swaglabs');
  });

});