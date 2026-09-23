describe('Proyecto Práctico #5 - Pruebas de Login en Swag Labs', () => {

  it('Debe cargar correctamente la página de inicio de sesión', () => {
    // Visitar la página web de pruebas
    cy.visit('https://www.saucedemo.com');

    // Validar que el título principal de la página sea visible
    cy.get('.login_logo').should('be.visible');
  });

});