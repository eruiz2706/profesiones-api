'use strict'

const express = require('express');
const { EspecialidadesController } = require('../controllers/especialidades.controller');
const { verificaTokenMiddleware, adminRolMiddleware } = require('../middlewares/autenticacion.middleware');
const router = express.Router();

const especialidadesController = new EspecialidadesController();

/*
|--------------------------------------------------------------------------
| End points listado de especialidades
|--------------------------------------------------------------------------
*/
router.get('/especialidades',especialidadesController.all);

/*
|--------------------------------------------------------------------------
| End points buscar especialidad por id
|--------------------------------------------------------------------------
*/
router.get('/especialidades/:id',especialidadesController.findById);

/*
|--------------------------------------------------------------------------
| End points crear especialidad
|--------------------------------------------------------------------------
*/
router.post('/especialidades',[verificaTokenMiddleware, adminRolMiddleware],especialidadesController.create);

/*
|--------------------------------------------------------------------------
| End points actualizar especialidad por id
|--------------------------------------------------------------------------
*/
router.put('/especialidades/:id',[verificaTokenMiddleware, adminRolMiddleware],especialidadesController.update);

/*
|--------------------------------------------------------------------------
| End points inactivar especialidad por id
|--------------------------------------------------------------------------
*/
router.delete('/especialidades/:id',[verificaTokenMiddleware, adminRolMiddleware],especialidadesController.delete);

module.exports = router;