const express = require("express");
const app = express();
require("dotenv").config();
const chat = require("./modules/chat")

app.route("/version")
    .get((req,res) => {
        res.send(process.env.APP_NAME + " versión: " + process.env.APP_VERSION);
    });

app.route("/chat")
    .get(chat.ExpressGet);

const server = app.listen(3000,() => {
    console.log("Escuchando en puerto 3000");
});

chat.Initialize(server);