'use strict'

var CategoriaSchema = require('../models/categoria.model');
var { GenericError } = require('../exceptions/index');
var { ResponseHelper } = require('../helpers/response.helper');

/**
*@description clase para gestionar la coleccion categorias
*@author Eduardo ruiz eruiz2706@gmail.com
*/
class CategoriasController{

    /**
    *@description retorna el listado de categorias
    *@query number offset
    *@query number limit
    *@query boolean estado - true o false para filtrar solo los registros activos o inactivos
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async all(req, res, next){
        
        try{
            let offset = Number(req.query.offset) || 0;
            let limit = Number(req.query.limit) || 10;

            let filtros ={};
            if(req.query.estado) {
                filtros.estado = true;
            }

            let categorias = await CategoriaSchema.find(filtros,'_id nombre estado').skip(offset).limit(limit);
            let registros = await CategoriaSchema.countDocuments(filtros);

            if( !categorias ){
                throw new GenericError(500,"No hay categorias"); 
            }

            ResponseHelper(res,{
                status: 200,
                message: 'Listado de categorias',
                count: registros,
                data: categorias
            });
            
        }catch(e){
            next(e);
        }
    }

    /**
    *@description crea una categoria
    *@param String nombre
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async create(req, res, next){

        try{
            let params = req.body;
            let categoria = new CategoriaSchema({
                nombre: params.nombre
            });
            
            let respuesta = await categoria.save();
                
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
    *@description actualiza una categoria por id
    *@param String id
    *@param String nombre
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async update(req, res, next){
        
        try{
            let id = req.params.id;
            let body = req.body;
    
            let categoria = {
                nombre: body.nombre
            };
    
            let respuesta = await CategoriaSchema.findByIdAndUpdate( id, categoria, { new: true });

            ResponseHelper(res,{
                status: 200,
                message: 'Registro actualizado correctamente',
                id: id,
                _data: respuesta
            });

        }catch(e){
            next(e);
        }
    }

    /**
    *@description inactivar una categoria por id
    *@param String id
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async delete(req, res, next){
        
        try{

            let id = req.params.id;
            let categoria = {
                estado: false
            };

            let respuesta = await CategoriaSchema.findByIdAndUpdate( id, categoria, { new: true });

            ResponseHelper(res,{
                status: 200,
                message: 'Registro eliminado correctamente',
                id: id,
                _data: respuesta
            });

        }catch(e){
            next(e);
        }
    }

    /**
    *@description retorna un item buscado por id
    *@param String id
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async findById(req, res, next){
        try{

            let id = req.params.id;
            let respuesta = await CategoriaSchema.findById(id,'_id nombre estado');

            ResponseHelper(res,{
                status: 200,
                message: 'Categoria encontrada',
                data: respuesta
            });
        }catch(e){
            next(e);
        }
    }
}

module.exports = {
    CategoriasController
}