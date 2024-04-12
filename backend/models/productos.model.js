const mongoose = require("../config/database");


const schemaProducto = new mongoose.Schema({

 nombre:{
    type: String,
    required: true,
    
 },

 descripcion:{
    type: String,
    required: true
},

precio:{
    type: Number,
    required: true
},
stock:{
    type: String,
    required: true
},

fechaVencimiento: {
    type: Date,
    
},

categoria: {
    type: String,
    required: true
}


});

const Producto = mongoose.model("Producto", schemaProducto);
module.exports = Producto;