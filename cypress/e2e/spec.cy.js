import loginPage from '../pages/LoginPage';

describe('Proyecto Práctico #6 - Refactorización Profesional E2E (POM + Fixtures)', () => {

  beforeEach(function () {
    // Carga de datos de prueba desde el Fixture
    cy.fixture('users').as('userData');
    loginPage.visit();
  });

  it('Debe validar que la Landing Page y el logo carguen correctamente', () => {
    loginPage.logo.should('be.visible');
  });

  it('Debe ejecutar el login completo, validar la sesión y tomar captura de pantalla', function () {
    // Ejecución de login usando datos del Fixture y métodos del POM
    loginPage.login(this.userData.validUser.username, this.userData.validUser.password);

    // Verificación de éxito usando la abstracción de la página
    loginPage.verifyLoginSuccess();

    // Generación de evidencia automática
    cy.screenshot('proyecto6-login-pom-exitoso');
  });

});