'use strict'

var Categoria = require('../models/categoria');

class CategoriasController{

    getTodos(req, res, next){

        Categoria.find({}).exec(( err, response ) =>{
            if( err ){
                return res.status(500).send({
                    message: 'Error al devolver las categorias'
                });
            }
            if( !response ){
                return res.status(404).send({
                    message: 'No hay categorias'
                })
            }

            res.status(404).send({
                categorias: response
            })

        });
    }

    crear(req, res, next){

        var params = req.body;
        var categoria = new Categoria();
        categoria.nombre= params.nombre;

        categoria.save((err, response) => {
            if( err ){
               return  res.status(500).send({
                    message: err
                });
            }

            res.status(200).send({
                categoria: response
            });
        });
    }
}

module.exports = CategoriasController;