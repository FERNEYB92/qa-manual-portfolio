const request = require('supertest');

const BASE_URL = 'https://reqres.in/api';

describe('Pruebas de Integración - API ReqRes', () => {

  // PRUEBA 1: GET Lista de usuarios (Sesión 1)
  test('Debe obtener la lista de usuarios correctamente (Status 200 OK)', async () => {
    const response = await request(BASE_URL).get('/users?page=2');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  // PRUEBA 2: POST Crear un nuevo usuario (Sesión 2)
  test('Debe crear un nuevo usuario exitosamente (Status 201 Created)', async () => {
    const nuevoUsuario = {
      name: "Ferney Bautista",
      job: "QA Automation Engineer"
    };

    const response = await request(BASE_URL)
      .post('/users')
      .send(nuevoUsuario);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'Ferney Bautista');
    expect(response.body).toHaveProperty('job', 'QA Automation Engineer');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('createdAt');
  });

  // PRUEBA 3: GET Usuario no encontrado - Manejo de error (Sesión 2)
  test('Debe retornar un error 404 al consultar un usuario que no existe', async () => {
    const response = await request(BASE_URL).get('/users/23');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });

});