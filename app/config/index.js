
require('dotenv').config()

/**
*@description objeto para manejo de variables de entorno en la api
*@author Eduardo ruiz eruiz2706@gmail.com
*/
const config = {
    API_DEBUG: process.env.API_DEBUG !== 'production',
    PORT: process.env.PORT || 3000,
    API_MAPPING: process.env.API_MAPPING || '',
    MONGO_URI: process.env.MONGO_URI || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
    TOKEN_EXPIRED: process.env.TOKEN_EXPIRED || 5
}

module.exports =  {
    config
}