
class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // on connections
        this.io.on('connection', (socket) => {
            
            //Escuchar evento: mensaje-to-server
            socket.on('mensaje_to_server',(data)=>{
                console.log(data);
                this.io.emit('mensaje_from_server', data);
            });



        })    
    }
}

module.exports = Sockets;