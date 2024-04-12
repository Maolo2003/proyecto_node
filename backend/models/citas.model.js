const moongose = require("../config/database");
const Decimal128 = mongoose.Types.Decimal128;

const schemaCita = new mongoose.Schema({
    cliente: {
        type: ObjectId,
        required: true


    },

    fechaHora:{
        type:Date,
        required: true
    },

    precio:{
        type: Decimal128(),
        required: true
    },

    servicio: {
        type: ObjectId,
        required: true
    }


});

const Cita = mongoose.model("Cita", schemaCita);
module.exports = Cita;