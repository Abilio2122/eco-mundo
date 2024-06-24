
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Ruta principal
app.get('/', (req, res) => {
  res.send('Página de Inicio');
});

// Ruta de prueba
app.get('/test', (req, res) => {
  res.send('Ruta de prueba funcionando');
});

// Rutas públicas
app.use('/auth', authRoutes);

// Rutas protegidas
app.use('/protected', protectedRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
