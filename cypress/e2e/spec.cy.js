describe('Proyecto Práctico #5 - Pruebas de Login en Swag Labs', () => {

  beforeEach(() => {
    // Visitar la página antes de cada prueba
    cy.visit('https://www.saucedemo.com');
  });

  it('Debe cargar correctamente la página de inicio de sesión', () => {
    cy.get('.login_logo').should('be.visible');
  });

  it('Debe interactuar con el formulario e ingresar credenciales válidas', () => {
    // 1. Escribir el nombre de usuario
    cy.get('[data-test="username"]').type('standard_user');

    // 2. Escribir la contraseña
    cy.get('[data-test="password"]').type('secret_sauce');

    // 3. Hacer clic en el botón de Login
    cy.get('[data-test="login-button"]').click();
  });

});