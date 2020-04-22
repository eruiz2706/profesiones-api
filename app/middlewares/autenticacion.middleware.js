'use strict'

const { config } = require('../config');
var { GenericError } = require('../exceptions');
const jwt = require('jsonwebtoken');

/**
*@description middleware para verificar si el token suministado es valido
*@param headers Authorization
*@author Eduardo ruiz eruiz2706@gmail.com
*/
let verificaTokenMiddleware = async (req, res, next) =>{

    let token = req.get('Authorization')

    try{
        let decoded = await jwt.verify(token, config.JWT_SECRET);
        req.rol_decoded = decoded.rol;
        next();
    }catch(e){
        next(e);
    }
}

/**
*@description middleware para validar solo usuarios con rol administrador
*@author Eduardo ruiz eruiz2706@gmail.com
*/
let adminRolMiddleware = (req, res, next) =>{

    if(req.rol_decoded !== 'ADMIN_ROL'){
        next(new GenericError(500,"Usuario no autorizado"));
    }

}

/**
*@description middleware para validar solo usuarios con rol cliente
*@author Eduardo ruiz eruiz2706@gmail.com
*/
let clienteRolMiddleware = (req, res, next) =>{

    if(req.rol_decoded !== 'CLIENTE_ROL'){
        next(new GenericError(500,"Usuario no autorizado"));
    }

}

/**
*@description middleware para validar solo usuarios con rol profesional
*@author Eduardo ruiz eruiz2706@gmail.com
*/
let profesioanlRolMiddleware = (req, res, next) =>{

    if(req.rol_decoded !== 'PROFESIONAL_ROL'){
        next(new GenericError(500,"Usuario no autorizado"));
    }

}

let clienteProfesioanlRolMiddleware = (req, res, next) =>{

    if(req.rol_decoded !== 'PROFESIONAL_ROL' && req.rol_decoded !== 'CLIENTE_ROL'){
        next(new GenericError(500,"Usuario no autorizado"));
    }
}

module.exports = {
    verificaTokenMiddleware,
    adminRolMiddleware,
    clienteRolMiddleware,
    profesioanlRolMiddleware,
    clienteProfesioanlRolMiddleware
}