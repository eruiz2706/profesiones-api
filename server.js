'use strict'

/*
|--------------------------------------------------------------------------
| Import librerias
|--------------------------------------------------------------------------
*/
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { config }  = require('./app/config');

/*
|--------------------------------------------------------------------------
| Import de rutas y middleware
|--------------------------------------------------------------------------
*/
const mapeoRouter = require('./app/routes');
const { corsMiddleware } = require('./app/middlewares/cors.middleware');
const { errorHandlerMiddleware } = require('./app/middlewares/error-handler.middleware');

/*
|--------------------------------------------------------------------------
| Instancias
|--------------------------------------------------------------------------
*/
const PORT = config.PORT;
const app = express();

/*
|--------------------------------------------------------------------------
| Creacion del server y configuracion general
|--------------------------------------------------------------------------
*/
const server = http.createServer(app);

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(corsMiddleware);

/*
|--------------------------------------------------------------------------
| Mapeo de servicios
|--------------------------------------------------------------------------
*/
app.use(mapeoRouter);

/*
|--------------------------------------------------------------------------
| Captura de errores
|--------------------------------------------------------------------------
*/
app.use(errorHandlerMiddleware);

/*
|--------------------------------------------------------------------------
| Instancia del servidor
|--------------------------------------------------------------------------
*/
mongoose.connect(config.MONGO_URI,{useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {

    if( err ){
        throw err;
    }
    
    console.log("conexion base de datos correcta");
    
    server.listen(PORT,() => {
        console.log(`escuchando en puerto... ${PORT}`);
    })
});
