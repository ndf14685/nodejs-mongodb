var socket = new io();

function borrarSeleccion(){
    $("#piedra").removeClass("juego-imagen-seleccionada");
    $("#papel").removeClass("juego-imagen-seleccionada");
    $("#tijera").removeClass("juego-imagen-seleccionada");
}

$(document).ready(function(){
    $("#piedra").click(function(){
        borrarSeleccion();
        $("#piedra").addClass("juego-imagen-seleccionada");
        socket.emit("seleccion",
        {
            jugador: $("#jugador").val(),
            seleccion: "piedra"
        });
    });

    $("#papel").click(function(){
        borrarSeleccion();
        $("#papel").addClass("juego-imagen-seleccionada");
        socket.emit("seleccion",
        {
            jugador: $("#jugador").val(),
            seleccion: "papel"
        });
    });

    $("#tijera").click(function(){
        borrarSeleccion();
        $("#tijera").addClass("juego-imagen-seleccionada");
        socket.emit("seleccion",
        {
            jugador: $("#jugador").val(),
            seleccion: "tijera"
        });
    });

    var nombreJugador = "jugador"+ Math.floor(Math.random() * 10);
    $("#jugador").val(nombreJugador);
})

socket.on("oponente-selecciona", function (seleccion) {
    if(seleccion.jugador != $("#jugador").val()){
        $("#oponente").attr("src","img/"+ seleccion.seleccion +"-sel.jpg")
    }
});

socket.on("llenar-select", function(msg){
    if(msg!=$("#jugador").val()){
        $("#selectOponente").append($("<option>").text(msg));
    }
})

socket.on("nombrejugador",function(mgs){
    $("#jugador").val(mgs);
})