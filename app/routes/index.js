'use strict'

const express = require('express');
const { config }  = require('../config');
const categoriasRouter = require('./categorias.router');
const autenticacionRouter = require('./autenticacion.router');

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
| End points autenticacion
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,autenticacionRouter);

module.exports = app;