const mongoose = require("mongoose");
const schemas = require("./appschemas");
mongoose.connect("mongodb://localhost:27017/cursonode");

let Persona = new mongoose.model("Noticia", schemas.Personas);

const guardar = function(nombre,apellido,edad,callback){
    let nuevaPersona = new Persona({
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad
    });
    nuevaPersona.save(callback);
}

const listar = function(callback){
    Persona.find({},callback);
}

const obtener = function(id, callback){
    Persona.findOne({ _id: id },callback);
}

const actualizar = function(id, nombre, apellido, edad, callback){
    Persona.updateOne({ _id: id  }, {
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad
    },
    callback);
}

module.exports = {
    Guardar: guardar,
    Listar: listar,
    Obtener: obtener,
    Actualizar: actualizar
}