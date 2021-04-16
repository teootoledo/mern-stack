const express = require("express");
const app = express();

// Settings ======================================

// Si no existe PORT definida en las variables de entorno utiliza por defecto el 4000
app.set("port", process.env.PORT || 4000);

// Middlewares

// Routes

module.exports = app;
