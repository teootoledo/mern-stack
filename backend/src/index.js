// Importo del .env mis variables de entorno
require("dotenv").config();
const app = require("./app");

// Copia el código de database.js justo acá
require("./database");

// Usando una función main para iniciar el server
// puedo usar "aync-await" (callbacks)

async function main() {
  // Obtengo desde app definida en app.js el atributo port
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

// Levanto el servidor llamando a main
main();
