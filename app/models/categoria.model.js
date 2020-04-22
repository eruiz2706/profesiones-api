'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var CategoriaSchema = Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true,'El nombre es requerido']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

CategoriaSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser unico'} );
module.exports = mongoose.model('categorias',CategoriaSchema);