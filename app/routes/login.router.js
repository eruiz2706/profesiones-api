'use strict'

const express = require('express');
const LoginController = require('../controllers/login.controller');
const router = express.Router();

const loginController = new LoginController();

router.post('/login',loginController.login);

module.exports = router;