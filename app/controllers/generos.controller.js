'use strict'

var GeneroSchema = require('../models/genero.model');
var { GenericError } = require('../exceptions/index');
var { ResponseHelper } = require('../helpers/response.helper');

/**
*@description clase para gestionar la coleccion generos
*@author Eduardo ruiz eruiz2706@gmail.com
*/
class GenerosController{

    async all(req, res, next){
        ResponseHelper(res,{
            status: 200,
            message: 'Listado de generos'
        });
    }

    async create(req, res, next){
        ResponseHelper(res,{
            status: 200,
            message: 'creacion de genero'
        });
    }

    async update(req, res, next){
        ResponseHelper(res,{
            status: 200,
            message: 'actualizar genero'
        });
    }

    async delete(req, res, next){
        ResponseHelper(res,{
            status: 200,
            message: 'borrar genero'
        });
    }

    async findById(req, res, next){
        ResponseHelper(res,{
            status: 200,
            message: 'genero por id'
        });
    }
}

module.exports = {
    GenerosController
}