'use strict'

const { config } = require('../config');

/**
*@description metodo para genera una respuesta con estructura definida
*@author Eduardo ruiz eruiz2706@gmail.com
*@param object options - parametros estructura json {status,message,id,count,data,_id,_count,_data}
*@return response 
*/
function ResponseHelper(res,options){
    
    let response = {};
    response.code = options.status;
    response.message = options.message;
    if(options.id){
        response.id = options.id;
    } 
    if(options.count){
        response.count = options.count;
    } 
    if(options.data){
        response.data = options.data;
    } 

    if( config.API_DEBUG ){
        if(options._id){
            response._id = options._id;
        } 
        if(options._count){
            response._count = options._count;
        } 
        if(options._data){
            response._data = options._data;
        }
        console.log(response);
    }

    return res.status(options.status).send({
        response
    });

}

module.exports = {
    ResponseHelper
}