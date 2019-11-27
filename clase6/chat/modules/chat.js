const expressget = (req,res) => {
    res.sendFile(process.cwd() + "/static/html/chat.html");
}

const initialize = (server) => {
    const io = require("socket.io")(server);

    io.on("connection",(socketCliente) => {
        console.log("Se conecto un cliente");
        console.log(socketCliente);
        socketCliente.on("chat message",(msg) => {
            io.emit("chat message",msg);
        })
    });
}

module.exports = {
    ExpressGet: expressget,
    Initialize: initialize
}