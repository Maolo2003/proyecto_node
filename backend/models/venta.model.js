const mongoose = require("../config/database");

const schemaVenta = new moongose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    
    usuario: {
        type: Schema.ObjectId,
        ref: "Usuario",
        required: true
    },

    estado: {
        type: String,
        required: true
    }
});



const Venta = moongose.model("Venta", schemaVenta);
module.exports = Venta;