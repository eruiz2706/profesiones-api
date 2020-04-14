
require('dotenv').config()

//configuracion de las variables globales del microservicio
const config = {
    DEV: process.env.NODE_ENV !== 'production',
    PORT: process.env.PORT,
    API_MAPPING : process.env.API_MAPPING,
    MONGO_URI : process.env.MONGO_URI
}

module.exports =  config;