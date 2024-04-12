const mongoose = require("../config/database");
const Decimal128 = mongoose.Types.Decimal128;

const schemaPedido = new mongoose.Schema({
    usuario:{
        type: new ObjectId(),
        required: true
    },

    fecha:{
        type: Date,
        required: true 
    },

    descripcion: {
        type: String,
        required: true
    },

    precio: {
        type: new Decimal128(),
        required: true
    }
});

const Pedido = moongose.model("Pedido", schemaPedido);
module.exports = Pedido;