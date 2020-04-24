'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var EspecialidadesSchema = Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true,'El nombre es requerido']
    },
    categoria: {
        type: String,
        required: [true,'La categoria es requerida']
    },
    habilidades: {
        type: Array,
        required: false,
    },
    estado: {
        type: Boolean,
        default: true
    }
});

EspecialidadesSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser unico'} );
module.exports = mongoose.model('especialidades',EspecialidadesSchema);