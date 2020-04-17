'use strict'

const express = require('express');
const CategoriasController = require('../controllers/categoriasController');
const router = express.Router();

const categoriasController = new CategoriasController();

router.get('/categorias',categoriasController.getTodos);
router.post('/categorias',categoriasController.crear);

module.exports = router;