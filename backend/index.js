const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

// Middleware para procesar JSON
app.use(bodyParser.json());

// Configuración de CORS para permitir todas las solicitudes desde cualquier origen (*)
app.use(cors());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

// Ruta para manejar la solicitud POST desde el frontend
app.post('/registro', (req, res) => {
    const data = req.body; // Obtiene los datos del cuerpo de la solicitud
    const { username, rut, email, region, comuna, password } = data;

    // Inserta los datos en la base de datos
    const query = 'INSERT INTO datos (nombre, rut, correo, region, comuna, contraseña) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [username, rut, email, region, comuna, password], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error al registrar los datos');
            return;
        }
        console.log('Datos insertados:', result);
        res.json(data); // Envía los datos de vuelta al frontend
    });
});

app.post('/login', (req, res) => {
    const { rut, password } = req.body;

    console.log('Datos recibidos para inicio de sesión:', { rut, password });

    const query = 'SELECT * FROM datos WHERE rut = ?';
    db.query(query, [rut], (err, results) => {
        if (err) {
            console.error('Error al verificar los datos:', err);
            res.status(500).send('Error al iniciar sesión');
            return;
        }

        console.log('Resultados de la consulta:', results);

        if (results.length > 0) {
            const user = results[0];
            console.log('Usuario encontrado:', user);
            if (user.contraseña === password) {
                res.json({ success: true, message: 'Inicio de sesión exitoso' });
            } else {
                console.log('Contraseña incorrecta');
                res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
            }
        } else {
            console.log('Usuario no encontrado');
            res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }
    });
});

// Iniciar el servidor
const port = process.env.PORT || 3000; // Utiliza el puerto definido por el entorno o el 3000 por defecto
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
