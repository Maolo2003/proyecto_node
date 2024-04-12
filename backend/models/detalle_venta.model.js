const mongoose = require("../config/database");
const Decimal128 = mongoose.Types.Decimal128;

const schemaDetalleVenta = new moongose.Schema({
    venta: {
        type: new ObjectId(),
        required: true
    },

    producto: {
        type: new ObjectId(),
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    },

    precioHistorico:{
        type: new Decimal128(),
        required: true
    }
});

const DetalleVenta = mongoose.model("DetalleVenta", schemaDetalleVenta);
module.exports = DetalleVenta;