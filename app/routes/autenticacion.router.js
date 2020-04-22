'use strict'

const express = require('express');
const { AutenticacionController } = require('../controllers/autenticacion.controller');
const router = express.Router();

const autenticacionController = new AutenticacionController();

/*
|--------------------------------------------------------------------------
| End points crear usuario ( cliente / profesional )
|--------------------------------------------------------------------------
*/
router.post('/registro',autenticacionController.create);

/*
|--------------------------------------------------------------------------
| End points autenticar usuario
|--------------------------------------------------------------------------
*/
router.post('/login',autenticacionController.login);


module.exports = router;