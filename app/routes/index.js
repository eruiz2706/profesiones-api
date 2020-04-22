'use strict'

const express = require('express');
const { config }  = require('../config');
const categoriasRouter = require('./categorias.router');
const usuariosRouter = require('./usuarios.router');
const loginRouter = require('./login.router');

const app = express();
const API_MAPPING = config.API_MAPPING;

/*
|--------------------------------------------------------------------------
| End points categorias
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,categoriasRouter);

/*
|--------------------------------------------------------------------------
| End points usuarios
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,usuariosRouter);

/*
|--------------------------------------------------------------------------
| End points login
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,loginRouter);

module.exports = app;