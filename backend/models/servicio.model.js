const mongoose = require("../config/database");

const schemaServicio = new moongose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    } 
});

const Servicio = moongose.model("Servicio", schemaServicio);
module.exports = Servicio;