'use strict'

const { config } = require('../config');

/**
*@description middleware para capturar todos los tipos de errores y formatearlos con una  estructura de respuesta 
*@author Eduardo ruiz eruiz2706@gmail.com
*/
const errorHandlerMiddleware = (err, req, res, next) =>{
    
      let error = {
        errors: err.errors || [],
        code: err.status || 500,
        name: err.name || 'UndefinedError',
        message: err.message || ''
      };

      if( config.API_DEBUG ){
        error.stack = err.stack || '';
        console.log(error);
      }

      return res.status(err.status || 500).send({
        error
      });

    }

module.exports = {
  errorHandlerMiddleware
}