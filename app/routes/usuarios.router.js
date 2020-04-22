'use strict'

const express = require('express');
const { UsuariosController } = require('../controllers/usuarios.controller');
const { verificaTokenMiddleware } = require('../middlewares/autenticacion.middleware');
const router = express.Router();

const usuariosController = new UsuariosController();

router.get('/usuarios',verificaTokenMiddleware,usuariosController.all);
router.post('/usuarios',usuariosController.create);
router.put('/usuarios/:id',usuariosController.update);
router.delete('/usuarios/:id',usuariosController.delete);

module.exports = router;