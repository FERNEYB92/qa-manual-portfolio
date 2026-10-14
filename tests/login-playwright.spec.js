const { test, expect } = require('@playwright/test');

test.describe('Semana 7 - Pruebas E2E de Login con Playwright', () => {

  test.beforeEach(async ({ page }) => {
    // Navegar a la página de Swag Labs
    await page.goto('https://www.saucedemo.com/');
  });

  test('Debe cargar la página correctamente y validar el título', async ({ page }) => {
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('Debe realizar el login exitoso usando Playwright Locators', async ({ page }) => {
    // Usando locators orientados al usuario (resilientes)
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // Validar la redirección a la vista de inventario
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

});