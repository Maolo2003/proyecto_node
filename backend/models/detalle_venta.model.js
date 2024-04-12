const mongoose = require("../config/database");

const schemaDetalleVenta = new mongoose.Schema({
    venta: {
        type: String,
        required: true
    },

    producto: {
        type: String,
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    },

    precioHistorico:{
        type: Number,
        required: true
    }
});

const DetalleVenta = mongoose.model("DetalleVenta", schemaDetalleVenta);
module.exports = DetalleVenta;