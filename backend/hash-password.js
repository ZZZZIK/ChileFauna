// hash-password.js
const bcrypt = require('bcrypt');

const password = process.argv[2]; // Toma la contraseña desde la línea de comandos

if (!password) {
  console.error('Por favor, proporciona una contraseña para hashear.');
  console.log('Uso: node hash-password.js <tu_contraseña_aqui>');
  process.exit(1);
}

const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error al generar el hash:', err);
    return;
  }
  console.log('Tu contraseña en texto plano es:', password);
  console.log('El hash de bcrypt es:');
  console.log(hash); // Este es el valor que debes copiar
});