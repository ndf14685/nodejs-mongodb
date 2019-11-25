//Pasos que siempre tienen que estar


//1) Traer Modulo http
const http = require('http');

const fs = require('fs');



//2) Crear la instancia de HTTP
const server = http.createServer((req,res)=> {

    let {httpVersion, method, url} = req;
    console.log(`${httpVersion} | ${method} - ${url}}`)


    let streamDeLectura= fs.createReadStream(__dirname+"/index.html")


    res.writeHead(200, "OK", {'Content-Type': "text/html"})
    
    streamDeLectura.pipe(res)
    
    //res.pipe(streamDeLectura)


    //De esta forma vamos a encontrar en los tutoriales, es preferible hacerlo con pipe ahorra recursos del server 
    /*res.writeHead(418, "Im a teapot", {'Content-Type':"text/html"})
    res.write("<html lang=\'es'>")
    res.write("<body id='test'>")
    res.write("<p> Hola Mundo! Test Stream</p>")
    res.write("</body>")
    res.write("</html>")
*/


//    res.end("<p>Hola Mundo! </p>")
});


//PARA TODA PETICION TIENE QUE HABER UNA RESPUESSTA
//4) Resolver cada pedido con una respuesta : Cada pedido puede resolverse con un callback en la misma funcion HTTP.createServer(callback)
//o un evento de request. El callback viene con dos streams: uno de Lectura (Request) y otro de Escritura (Response)


/*server.on("request", (req,res)=> {
    res.end("Hola Mundo!")
})*/ //Esto lo mando al momento de crear la instancia 


//3) Abrir el puerto
server.listen(8000);



