'use strict'

var EspecialidadesSchema = require('../models/especialidad.model');
var CategoriaSchema = require('../models/categoria.model');
var { GenericError } = require('../exceptions/index');
var { ResponseHelper } = require('../helpers/response.helper');

/**
*@description clase para gestionar la coleccion especialidades
*@author Eduardo ruiz eruiz2706@gmail.com
*/
class EspecialidadesController{

    /**
    *@description retorna el listado de especialidades
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async all(req, res, next){
        try{
            let offset = Number(req.query.offset) || 0;
            let limit = Number(req.query.limit) || 10;

            let filtros ={};
            let columnas = '_id nombre estado';

            if(req.query.estado) {
                filtros.estado = true;
            }
            if(req.query.habilidades) {
                columnas +=' habilidades';
            }
            
            let especialidad = await EspecialidadesSchema.find(filtros,columnas).skip(offset).limit(limit);
            let registros = await EspecialidadesSchema.countDocuments(filtros);

            if( !especialidad ){
                throw new GenericError(500,"No hay especialidades"); 
            }

            ResponseHelper(res,{
                status: 200,
                message: 'Listado de especialidades',
                count: registros,
                data: especialidad
            });
            
        }catch(e){
            next(e);
        }
    }

    /**
    *@description crea una especialidad
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async create(req, res, next){
        try{
            let params = req.body;

            let categoria = await CategoriaSchema.findOne({ nombre: params.categoria })
            if( !categoria ){
                throw new GenericError(500,"La categoria no existe"); 
            }

            let especialidad = new EspecialidadesSchema({
                nombre: params.nombre,
                categoria: params.categoria,
                habilidades: params.habilidades
            });
            
            let respuesta = await especialidad.save();
                
            ResponseHelper(res,{
                status: 200,
                message: 'Registro creado correctamente',
                id: respuesta._id,
                _data: respuesta
            });
        }catch(e){
            next(e);
        }
    }

    /**
    *@description actualiza una especialidad por id
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async update(req, res, next){
        ResponseHelper(res,{
            status: 200,
            message: 'Actualizar',
        });
    }

    /**
    *@description inactivar una especialidad por id
    *@param String id
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async delete(req, res, next){
        ResponseHelper(res,{
            status: 200,
            message: 'Inactivar',
        });
    }

    /**
    *@description retorna un item buscado por id
    *@param String id
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async findById(req, res, next){
        
    }
}

module.exports = {
    EspecialidadesController
}