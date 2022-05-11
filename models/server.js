const express = require("express");
const socketio = require('socket.io');
//Servidor de sockets
const http = require('http');
const path = require('path');
const Sockets = require('./sockets');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer(this.app);

        // Configuraciones de sockets

        // Configuracion del socket
        this.io = socketio(this.server, { /* configuraciones */});

    }
    middlewares() {
        // Desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname,'../public') ))
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {
        //Inicializar middlewares
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();

        this.server.listen(this.port,() => {
            console.log('Server corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;