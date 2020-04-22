
/**
*@description metodo generico para generar un error 
*@author Eduardo ruiz eruiz2706@gmail.com
*/
function GenericError(status,message){
    this.name = 'GenericError';
    this.message = message || '';
    this.status = status || 500;
    this.stack = (new Error()).stack;
}

module.exports = {
    GenericError
}