'use strict'

const { config } = require('../config');
const jwt = require('jsonwebtoken');

/**
*@description middleware para verificar si el token suministado es valido
*@author Eduardo ruiz eruiz2706@gmail.com
*/
let verificaTokenMiddleware = (req, res, next) =>{

    let token = req.get('Authorization')

    /*try{

    }catch(e){

    }*/

    jwt.verify(token, config.JWT_SECRET,(err, decoded) => {

        if( err ){
            return res.status(401).send({
                status: 'error',
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

}

module.exports = {
    verificaTokenMiddleware
}