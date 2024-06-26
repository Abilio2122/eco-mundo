const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const saltRounds = 10;

// Middleware para procesar JSON
app.use(bodyParser.json());

// Definir los orígenes permitidos
const allowedOrigins = ['http://localhost:8100', 'http://127.0.0.1:8100'];

// Configuración de CORS
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}));

// Configuración para servir archivos estáticos
app.use('/images', express.static('public/images'));

// Ocultar información del servidor en los encabezados HTTP
app.disable('x-powered-by');

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

// Configura el límite de intentos de inicio de sesión
const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 5, // límite de 5 solicitudes
    message: 'Demasiados intentos de inicio de sesión, por favor intente de nuevo después de 1 minuto',
    headers: true,
});

// Ruta para manejar la solicitud POST desde el frontend
app.post('/registro', async (req, res) => {
    const data = req.body;
    const { username, rut, email, region, comuna, password } = data;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hashed password:', hashedPassword); // Verifica el hash

        const query = 'INSERT INTO datos (nombre, rut, correo, region, comuna, contraseña) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [username, rut, email, region, comuna, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error al insertar datos:', err);
                res.status(500).send('Error al registrar los datos');
                return;
            }
            console.log('Datos insertados:', result);
            res.json({ message: 'Registro correcto' }); // Envía un mensaje conciso de vuelta al frontend
        });
    } catch (err) {
        console.error('Error al encriptar la contraseña:', err);
        res.status(500).send('Error al registrar los datos');
    }
});

// Aplica el limitador a la ruta de inicio de sesión
app.post('/login', loginLimiter, (req, res) => {
    const { rut, password } = req.body;

    console.log('Datos recibidos para inicio de sesión:', { rut, password });

    const query = 'SELECT * FROM datos WHERE rut = ?';
    db.query(query, [rut], async (err, results) => {
        if (err) {
            console.error('Error al verificar los datos:', err);
            res.status(500).send('Error al iniciar sesión');
            return;
        }

        console.log('Resultados de la consulta:', results);

        if (results.length > 0) {
            const user = results[0];
            console.log('Contraseña almacenada:', user.contraseña); // Imprime la contraseña almacenada
            try {
                const match = await bcrypt.compare(password, user.contraseña);
                if (match) {
                    res.json({ success: true, message: 'Inicio de sesión exitoso', tipo: user.tipo });
                } else {
                    console.log('Comparación de hash fallida');
                    res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
                }
            } catch (compareError) {
                console.error('Error al comparar las contraseñas:', compareError);
                res.status(500).send('Error al iniciar sesión');
            }
        } else {
            console.log('Usuario no encontrado');
            res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }
    });
});

app.get('/noticias_climaticas', (req, res) => {
    const query = 'SELECT * FROM noticias_climaticas';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los datos:', err);
            res.status(500).send('Error al obtener los datos');
            return;
        }
        res.json(results);
    });
});

app.put('/noticias_climaticas/:id', (req, res) => {
    const { id } = req.params;
    const { title, section_title, content, image_url } = req.body;

    const query = 'UPDATE noticias_climaticas SET title = ?, section_title = ?, content = ?, image_url = ? WHERE id = ?';
    db.query(query, [title, section_title, content, image_url, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar los datos:', err);
            res.status(500).send('Error al actualizar los datos');
            return;
        }
        res.json({ success: true, message: 'Datos actualizados exitosamente' });
    });
});

// Ruta para manejar la eliminación de un usuario por RUT
app.delete('/usuarios/:rut', (req, res) => {
    const { rut } = req.params;

    const query = 'DELETE FROM datos WHERE rut = ?';
    db.query(query, [rut], (err, result) => {
        if (err) {
            console.error('Error al eliminar el usuario:', err);
            res.status(500).send('Error al eliminar el usuario');
            return;
        }
        res.json({ success: true, message: 'Usuario eliminado exitosamente' });
    });
});

// Manejo seguro de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
