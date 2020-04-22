'use strict'

const express = require('express');
const { CategoriasController } = require('../controllers/categorias.controller');
const { verificaTokenMiddleware, adminRolMiddleware } = require('../middlewares/autenticacion.middleware');
const router = express.Router();

const categoriasController = new CategoriasController();

/*
|--------------------------------------------------------------------------
| End points listado de categorias
|--------------------------------------------------------------------------
*/
router.get('/categorias',categoriasController.all);

/*
|--------------------------------------------------------------------------
| End points buscar categoria por id
|--------------------------------------------------------------------------
*/
router.get('/categorias/:id',categoriasController.findById);

/*
|--------------------------------------------------------------------------
| End points crear categoria
|--------------------------------------------------------------------------
*/
router.post('/categorias',[verificaTokenMiddleware, adminRolMiddleware],categoriasController.create);

/*
|--------------------------------------------------------------------------
| End points actualizar categoria por id
|--------------------------------------------------------------------------
*/
router.put('/categorias/:id',[verificaTokenMiddleware, adminRolMiddleware],categoriasController.update);

/*
|--------------------------------------------------------------------------
| End points inactivar categoria por id
|--------------------------------------------------------------------------
*/
router.delete('/categorias/:id',[verificaTokenMiddleware, adminRolMiddleware],categoriasController.delete);

module.exports = router;