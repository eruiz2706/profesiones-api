'use strict'

var Usuario = require('../models/usuarios.model');
const bcrypt = require('bcrypt');

class UsuariosController{

    all(req, res, next){

        let offset = Number(req.query.offset) || 0;
        let limit = Number(req.query.limit) || 10;
        
        Usuario.find({estado:true},'nombre email')
        .skip(offset)
        .limit(limit)
        .exec( (error, response) => {
            
            if( error ){
                return res.status(400).send({
                    status: 'error',
                    error
                });
            }

            Usuario.count({estado:true},(error, conteo )=>{

                return res.status(400).send({
                    status: 'success',
                    usuarios: response,
                    registros: conteo
                });
            });
        });
    }

    create(req, res, next){
        
        let body = req.body;

        let usuario = new Usuario({
            nombre: body.nombre,
            email: body.email,
            password: bcrypt.hashSync( body.password, 10 ),
            nombre: body.nombre,
            terminos: body.terminos,
            habilidades: {
                nombre: "fadf",
                apellido:"fasd"
            }
        });

        usuario.save( (error, response) => {

            if( error ){
                return res.status(400).send({
                    status: 'error',
                    error
                });
            }

            res.status(400).send({
                status: 'success',
                usuario: response
            });

        });
        
    }

    update(req, res, next){
        let id = req.params.id;
        let body = req.body;

        let usuario = {
            nombre: body.nombre
        };

        Usuario.findByIdAndUpdate( id, usuario, { new: true }, (error, response) => {

            if( error ) {
                return res.status(400).send({
                    status: 'error',
                    error
                });
            }

            res.status(400).send({
                status: 'success',
                usuario: response
            });

        });
    }

    delete(req, res, next){
        let id = req.params.id;
        
        let usuario = {
            estado: false
        };

        Usuario.findByIdAndUpdate( id, usuario, { new: true }, (error, response) => {

            if( error ) {
                return res.status(400).send({
                    status: 'error',
                    error
                });
            }

            res.status(400).send({
                status: 'success',
                usuario: response
            });

        });
    }
}

module.exports = {
    UsuariosController
}