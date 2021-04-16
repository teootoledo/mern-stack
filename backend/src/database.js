// Acá se define conexión con la base de datos

const mongoose = require("mongoose");

// Le digo que cree una base de datos llamada "mernstack" (Esto está definido en .env por cuestiones de seguridad)
// Si no existe el .env o no está bien configurado, crea una db llamada "databasetest"
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";

// Le paso la dirección a la que quiero que se conecte
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

// Cuando la base de datos está conectada, lo informo por consola
connection.once("open", () => {
  console.log("DB is connected");
});
