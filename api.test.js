const request = require('supertest');

// Usamos la API pública ReqRes
const BASE_URL = 'https://reqres.in/api';

describe('Pruebas de Integración - API ReqRes', () => {

  test('Debe obtener la lista de usuarios correctamente (Status 200 OK)', async () => {
    // 1. Petición HTTP GET al endpoint /users?page=2
    const response = await request(BASE_URL).get('/users?page=2');

    // 2. Validar que el código de estado sea 200
    expect(response.status).toBe(200);

    // 3. Validar que la respuesta contenga datos (un arreglo)
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

});