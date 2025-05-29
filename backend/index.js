// ---- SERVIDOR ----
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// ---- BASE DE DATOS ----
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',       
    user: 'tu_usuario',          // Reemplaza con tu usuario de MySQL
    password: 'tu_contraseña',   // Reemplaza con tu contraseña de MySQL
    database: 'chile_fauna'      // nombre de la base de datos creada
});

connection.connect((err) => {  // conectar y luego iniciar el servidor solo si la conexion fue exitosa
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
});

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});