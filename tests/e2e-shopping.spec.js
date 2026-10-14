const { test, expect } = require('@playwright/test');

test.describe('Proyecto Práctico #7 - Flujo E2E de Compras en Swag Labs', () => {

  test('Debe completar exitosamente una compra desde el login hasta la confirmación', async ({ page }) => {
    // 1. Navegación e inicio de sesión
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // Validar llegada al catálogo
    await expect(page).toHaveURL(/.*inventory.html/);

    // 2. Agregar productos al carrito usando locators de Playwright
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Validar que el contador del carrito marque 2 items
    const shoppingCartBadge = page.locator('.shopping_cart_badge');
    await expect(shoppingCartBadge).toHaveText('2');

    // 3. Ir al Carrito de Compras
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(page.getByText('Your Cart')).toBeVisible();

    // 4. Iniciar Checkout
    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page).toHaveURL(/.*checkout-step-one.html/);

    // 5. Diligenciar formulario del cliente
    await page.getByPlaceholder('First Name').fill('Ferney');
    await page.getByPlaceholder('Last Name').fill('Bautista');
    await page.getByPlaceholder('Zip/Postal Code').fill('110111');
    await page.getByRole('button', { name: 'Continue' }).click();

    // 6. Resumen de compra y finalización
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await page.getByRole('button', { name: 'Finish' }).click();

    // 7. Validación final de confirmación de orden
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

});