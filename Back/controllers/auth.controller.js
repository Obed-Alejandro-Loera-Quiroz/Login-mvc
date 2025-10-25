// controllers/auth.controller.js

// Importamos los datos de los usuarios
const users = require('../modelo/users.json');

// Definimos la función de login
const login = (req, res) => {
    // Obtenemos 'cuenta' y 'contrasena' del cuerpo de la petición
    const { cuenta, contrasena } = req.body;

    // Buscamos si el usuario existe en nuestro "users.json"
    const usuario = users.find(
        user => user.cuenta === cuenta && user.contrasena === contrasena
    );

    // Si el usuario no existe, enviamos un error 401 (No autorizado)
    if (!usuario) {
        return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }

    // Si el usuario existe, enviamos una respuesta exitosa 200
    // con los datos del usuario (sin la contraseña por seguridad).
    res.status(200).json({
        usuario: {
            cuenta: usuario.cuenta,
            nombre: usuario.nombre
        }
    });
};

// Exportamos la función para que las rutas puedan usarla
module.exports = {
    login,
};