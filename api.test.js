const request = require('supertest');

const BASE_URL = 'https://reqres.in/api';

describe('Pruebas de Integración - Flujo CRUD Completo en API ReqRes', () => {
  let userId;

  // 1. CREATE: Crear usuario
  test('1. POST - Debe crear un nuevo usuario (Status 201 Created)', async () => {
    const nuevoUsuario = {
      name: "Ferney Bautista",
      job: "QA Automation Engineer"
    };

    const response = await request(BASE_URL)
      .post('/users')
      .send(nuevoUsuario);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'Ferney Bautista');
    expect(response.body).toHaveProperty('id');
    
    // Guardamos el ID para usarlo en las siguientes pruebas
    userId = response.body.id;
  });

  // 2. READ: Obtener lista de usuarios
  test('2. GET - Debe obtener la lista de usuarios (Status 200 OK)', async () => {
    const response = await request(BASE_URL).get('/users?page=2');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  // 3. UPDATE: Actualizar usuario existente
  test('3. PUT - Debe actualizar la información del usuario (Status 200 OK)', async () => {
    const datosActualizados = {
      name: "Ferney Bautista",
      job: "Senior QA Automation Engineer"
    };

    const response = await request(BASE_URL)
      .put(`/users/${userId || 2}`)
      .send(datosActualizados);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('job', 'Senior QA Automation Engineer');
    expect(response.body).toHaveProperty('updatedAt');
  });

  // 4. DELETE: Eliminar usuario
  test('4. DELETE - Debe eliminar un usuario exitosamente (Status 204 No Content)', async () => {
    const response = await request(BASE_URL).delete(`/users/${userId || 2}`);

    expect(response.status).toBe(204);
  });
});