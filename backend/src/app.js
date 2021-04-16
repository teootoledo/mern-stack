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
app.get("/api/users", (req, res) => res.send("Users Routes"));
app.get("/api/notes", (req, res) => res.send("Notes Routes"));

module.exports = app;
