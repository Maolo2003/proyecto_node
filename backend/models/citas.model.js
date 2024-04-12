const mongoose = require("../config/database");

const schemaCita = new mongoose.Schema({
    cliente: {
        type: String,
        required: true


    },

    fechaHora:{
        type:Date,
        required: true
    },

    precio:{
        type: Number,
        required: true
    },

    servicio: {
        type: String,
        required: true
    }


});

const Cita = mongoose.model("Cita", schemaCita);
module.exports = Cita;