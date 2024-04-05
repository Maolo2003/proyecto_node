const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
 referencia:{
    type: String,
    required: true,
 },
 nombre:{
    type: String,
    required: true,
    default: 'No registra',
 },
 descripcion:{
    type: String,
    required: [true, 'la descripcion es obligatoria']
},
precio:{
    type: Number,
    default: [0, 'El precio por defecto es cero'],
    min: [0, 'El precio minimo es cero'],
},
stock:{
    type: Number,
    default: [0, 'El stock por defecto es cero'],
    min: [0, 'El stock por defecto es cero'],
},
imagen: {
    type: String,
    required: [true, 'No existe ruta o imagen por defecto']
},
habilitado: {
    type: Boolean,
    default: true 
},
});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;