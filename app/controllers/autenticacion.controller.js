'use strict'

var UsuarioSchema = require('../models/usuarios.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config');
var { GenericError } = require('../exceptions/index');
var { ResponseHelper } = require('../helpers/response.helper');

/**
*@description clase para gestionar la creacion y autenticacion de usuarios
*@author Eduardo ruiz eruiz2706@gmail.com
*/
class AutenticacionController{

    /**
    *@description crea un usuario con perfil cliente o profesional
    *@param req.body - {string nombre,string email,string password,boolean terminos,boolean profesional}
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async create(req, res, next){
        
        let body = req.body;
        let usuario = new UsuarioSchema();
        usuario.nombre = body.nombre;
        usuario.email = body.email;
        usuario.password = bcrypt.hashSync( body.password, 10 );
        usuario.terminos = body.terminos;
        usuario.profesional = body.profesional || false;
        if(usuario.profesional){
            usuario.rol = 'PROFESIONAL_ROL';
        }

        try{
            let response = await usuario.save();

            ResponseHelper(res,{
                status: 200,
                message: 'Usuario credo correctamente',
                _data: response
            });
        }catch(e){
            next(e);
        }
    }

    /**
    *@description autentica un usuario 
    *@param req.body - {string email,string password}
    *@author Eduardo ruiz eruiz2706@gmail.com
    *@return json
    */
    async login(req, res, next){

        let body = req.body;

        try{
            var usuario = await UsuarioSchema.findOne( {email: body.email} );
            if( !usuario ){
                throw new GenericError(500,"Usuario o contraseña incorrectos"); 
            }

            if( !bcrypt.compareSync( body.password, usuario.password ) ){
                throw new GenericError(500,"Usuario o contraseña incorrectos"); 
            }

            let expiresIn = 60 * config.TOKEN_EXPIRED;
            let token = jwt.sign({
                rol: usuario.rol
            }, config.JWT_SECRET, { expiresIn: expiresIn });

            ResponseHelper(res,{
                status: 200,
                message: 'Usuario autenticado',
                data: {
                    nombre: usuario.nombre,
                    email: usuario.email,
                    token: token
                }
            });
        
        }catch(error){
            next(e);
        }
    }
}

module.exports = {
    AutenticacionController
}