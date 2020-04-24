'use strict'

const express = require('express');
const { config }  = require('../config');
const autenticacionRouter = require('./autenticacion.router');
const categoriasRouter = require('./categorias.router');
const especialidadesRouter = require('./especialidades.router');
const generosRouter = require('./generos.router');

const app = express();
const API_MAPPING = config.API_MAPPING;

/*
|--------------------------------------------------------------------------
| End points autenticacion
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,autenticacionRouter);

/*
|--------------------------------------------------------------------------
| End points categorias
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,categoriasRouter);

/*
|--------------------------------------------------------------------------
| End points especialidades
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,especialidadesRouter);

/*
|--------------------------------------------------------------------------
| End points generos
|--------------------------------------------------------------------------
*/
app.use(`${API_MAPPING}`,generosRouter);

module.exports = app;