//levantar el servidor con nodemon express y cors
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ALLOWED_ORIGINS = [
    'http://localhost:5500',
    'http://127.0.0.1:5500',
];
app.use(cors({
    origin: function(origin, callback) {
        if(!origin || ALLOWED_ORIGINS.includes(origin)) {
            return callback(null, true);
        }
        //si el origen no está permitido se rechaza la solicitud
        callback(new Error('Origen no permitido por CORS: ' + origin));
    },
    //especificar los metodos http permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    optionsSuccessStatus: 200

}));

//montar rutas bajo api
app.use('/api/auth', authRoutes);

//ruta de salud
app.get("/health", (_req, res) => res.json({ok: true}));

//definir rutas
app.get('/', (req, res) => {
    res.send('Hola Mundo desde el servidor Express');
});


//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
});


