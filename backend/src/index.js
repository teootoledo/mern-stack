const app = require("./app");

// Usando una función main para iniciar el server
// puedo usar "aync-await" (callbacks)

async function main() {
  await app.listen(4000);
  console.log("Server on port 4000");
}

// Levanto el servidor llamando a main
main();
