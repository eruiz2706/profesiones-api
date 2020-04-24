'use strict'

const express = require('express');
const { GenerosController } = require('../controllers/generos.controller');
const { verificaTokenMiddleware, adminRolMiddleware } = require('../middlewares/autenticacion.middleware');
const router = express.Router();

const generosController = new GenerosController();

/*
|--------------------------------------------------------------------------
| End points listado de categorias
|--------------------------------------------------------------------------
*/
router.get('/generos',generosController.all);

/*
|--------------------------------------------------------------------------
| End points buscar generos por id
|--------------------------------------------------------------------------
*/
router.get('/generos/:id',generosController.findById);

/*
|--------------------------------------------------------------------------
| End points crear generos
|--------------------------------------------------------------------------
*/
router.post('/generos',[verificaTokenMiddleware, adminRolMiddleware],generosController.create);

/*
|--------------------------------------------------------------------------
| End points actualizar genero por id
|--------------------------------------------------------------------------
*/
router.put('/generos/:id',[verificaTokenMiddleware, adminRolMiddleware],generosController.update);

/*
|--------------------------------------------------------------------------
| End points inactivar categoria por id
|--------------------------------------------------------------------------
*/
router.delete('/generos/:id',[verificaTokenMiddleware, adminRolMiddleware],generosController.delete);

module.exports = router;