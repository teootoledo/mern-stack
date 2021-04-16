// Importo del .env mis variables de entorno
require("dotenv").config();
const app = require("./app");

// Copia el código de database.js justo acá
require("./database");

// Usando una función main para iniciar el server
// puedo usar "aync-await" (callbacks)

async function main() {
  await app.listen(4000);
  console.log("Server on port 4000");
}

// Levanto el servidor llamando a main
main();
