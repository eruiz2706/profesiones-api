'use strict'

var Usuario = require('../models/usuarios.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config');

class UsuariosController{

    async login(req, res, next){

        let body = req.body;

        try{
            var usuarioDB = await Usuario.findOne( {email: body.email} );
            if( !usuarioDB ){
                throw ({ message: 'Usuario o contraseña incorrectos'});
            }

            if( !bcrypt.compareSync( body.password, usuarioDB.password ) ){
                throw ({ message: 'Usuario o contraseña incorrectos' });
            }

            let token = jwt.sign({
                usuario: usuarioDB.nombre
            }, config.JWT_SECRET, { expiresIn: 60 * 5 });


            res.status(400).send({
                status: 'success',
                usuario: usuarioDB,
                token
            }); 
        
        }catch(error){
            return res.status(400).send({
                status: 'error',
                error
            });
        }
    }
}

module.exports = UsuariosController;