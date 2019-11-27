const express = require("express");
const app = express();

require('dotenv').config();

const chat = require("./modules/chat");
const juego = require("./modules/piedrapapeltijera");

app.use("/img",express.static("static/img"));
app.use("/css",express.static("static/css"));
app.use("/js",express.static("static/js"));

app.route("/")
.get((req,res) => {
    res.sendFile(__dirname + "/static/html/index.html");
})

app.get("/chat",chat.ExpressGet);

app.get("/juego",juego.ExpressGet);

var server = app.listen(3000,() => {
    console.log("Escuchando en puerto 3000");
});

chat.Initialize(server);
juego.Initialize(server);