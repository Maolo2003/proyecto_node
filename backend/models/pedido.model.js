const mongoose = require("../config/database");

const schemaPedido = new mongoose.Schema({
    usuario:{
        type: String,
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
        type: Number,
        required: true
    }
});

const Pedido = mongoose.model("Pedido", schemaPedido);
module.exports = Pedido;