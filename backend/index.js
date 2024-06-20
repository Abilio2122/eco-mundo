const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, rut, email, region, comuna, password } = req.body;
    // Aquí puedes agregar el código para guardar los datos en tu base de datos
    console.log('Datos recibidos:', req.body);
    res.status(200).json({ message: 'Registro exitoso' });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
