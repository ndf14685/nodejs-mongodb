const mongoose = require("mongoose");

let schemaPersonas = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Apellido: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 2
    },
    Edad: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = {
    Personas: schemaPersonas
}