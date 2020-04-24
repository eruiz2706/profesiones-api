'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true,'El nombre es requerido']
    },
    email: {
        type: String,
        unique: true,
        required: [true,'El email es requerido']
    },
    password: {
        type: String,
        unique: true,
        required: [true,'El password es requerido']
    },
    documento: {
        type: String,
        required: false,
    },
    telefono: {
        type: String,
        required: false,
    },
    imagen: {
        type: Array,
        required: false,
    },
    genero: {
        type: String,
        required: false,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
    facebook: {
        type: Boolean,
        default: false,
    },
    terminos: {
        type: Boolean,
        required: [true,'Debe marcar los terminos de uso']
    },
    rol: {
        type: String,
        default: 'CLIENTE_ROL'
    },
    profesional: {
        type: Boolean,
        default: false,
    },
    especialidad: {
        type: String,
        required: false,
    },
    categoria: {
        type: String,
        required: false,
    },
    habilidades: {
        type: Array,
        required: false,
    },
    certificados: {
        type: Array,
        required: false,
    },
    precio_hora: {
        type: Number,
        required: false,
    },
    experiencia: {
        type: String,
        required: false,
    },
    sobre_mi: {
        type: String,
        required: false,
    },
    historial_laboral: {
        type: Array,
        required: false,
    },
});

UsuarioSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser unico'} );
module.exports = mongoose.model('usuarios',UsuarioSchema);