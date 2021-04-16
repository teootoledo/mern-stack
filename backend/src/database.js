// Acá se define conexión con la base de datos

const mongoose = require("mongoose");

// Le digo que cree una base de datos llamada "mernstack"
const URI = "mongodb://localhost/mernstack";

// Le paso la dirección a la que quiero que se conecte
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

// Cuando la base de datos está conectada, lo informo por consola
connection.once("open", () => {
  console.log("DB is connected");
});
