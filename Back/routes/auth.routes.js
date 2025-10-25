// routes/auth.routes.js

// 1. Importar Express para poder usar su Router
const express = require('express');

// 2. Crear una instancia del Router
const router = express.Router();

// 3. Importar el controlador que manejará la lógica
const authController = require('../controllers/auth.controller.js');

// 4. Definir las rutas
// Cuando llegue una petición POST a /api/auth/login,
// se ejecutará la función 'login' del authController.
router.post('/login', authController.login);

// 5. Exportar el router para que server.js pueda usarlo
module.exports = router;