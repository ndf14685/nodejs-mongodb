let idjugador = 0;

const initialize = (server) => {
    let io = require("socket.io")(server);

    io.on("connection",(socketCliente) => {
        console.log("Se conectó un cliente al piedra papel o tijera");

        idjugador++;
        socketCliente.emit("nombrejugador","jugador"+idjugador);
        io.emit("llenar-select","jugador"+idjugador);

        socketCliente.on("seleccion", (msg) => {
            console.log("Se selecciono "+ msg);
            io.emit("oponente-selecciona",msg);
        });
    });
}

const get  = (req,res) => {
    //primero mostrar con __dirname poniendo el chat en la misma carpeta
    let ruta = process.cwd() + "/static/html/piedrapapeltijera.html";
    res.sendFile(ruta);
}

module.exports = {
    Initialize: initialize,
    ExpressGet: get
}
