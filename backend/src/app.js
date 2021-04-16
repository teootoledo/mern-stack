const express = require("express");
const cors = require("cors");
const app = express();

// Settings ======================================

// Si no existe PORT definida en las variables de entorno utiliza por defecto el 4000
app.set("port", process.env.PORT || 4000);

// Middlewares ===================================
app.use(cors());
app.use(express.json());

// Routes

// El método "use" utiliza otro archivo
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
