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
const config  = require('./app/config');

/*
|--------------------------------------------------------------------------
| Import de controladores,rutas y middleware
|--------------------------------------------------------------------------
*/
const mapRouter = require('./app/routes/index');
const corsMiddleware = require('./app/middlewares/cors');

/*
|--------------------------------------------------------------------------
| Instancias
|--------------------------------------------------------------------------
*/
const port = config.PORT;
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
app.use(mapRouter);

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
    server.listen(port,() => {
        console.log(`escuchando en puerto... ${port}`);
    })
});
