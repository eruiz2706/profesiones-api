'use strict'

const express = require('express');
const config  = require('../config');
const categoriasRouter = require('../routes/categoriasRouter');

const app = express();
const API_MAPPING = config.API_MAPPING;

app.use(`${API_MAPPING}`,categoriasRouter);

module.exports = app;