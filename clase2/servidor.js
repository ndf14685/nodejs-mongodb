//const http = require("http")

const express = require("express")

//const servidor = http.createServer((req,res) =)


const servidor = express()


// Express.use(middleware Function) => El metodo use una instancia 
// de Express nos permite configurarle midd (Operaciones que pasen 
//     antes que caigan a una ruta)

//Si alguien te pide un archivo (req), fijate en este dir, sino 404
servidor.use(express.static("/public"))

servidor.use(express.json())


servidor.get("/", (req,res)=>{
    res.sendFile(`${__dirname}/index.html`)


})

servidor.get("/mensaje",(req,res)=> {
    // res.writeHead(200,"OK",{"content-type":"application/json"})
    // //{"status","OK"}
    // res.write(JSON.stringify({"status":"OK"}))
    // res.end()
    res.json({"status":"OK"})
})

// localhost:8000/usuarios

// // localhost:8000/usuarios?nombre=horacio
// servidor.get("/usuarios",(req,res)=>{
//     console.log(req.query)

//     res.json({id_usuario:req.params.id})

// })

// //POST localhost:8000/usuarios/1

// //Body: {nombre: "Horacio"}
// servidor.post("/usuarios",(req,res)=>{
//     console.log(req.body)
//     res.end()
    
// })


servidor
    .route("/usuarios")
    // .get( (req,res,next)=>{
    //     //res.end()
    //     // ....
    //     next()
    // })
    .get( (req,res)=>{
        res.sendFile(`${__dirname}/index.html`)
    
    
    })
    .post()=
    
    .post()
// localhost:8000/usuarios/1

servidor.get("/usuarios/:id",(req,res)=>{
    // console.log(req.params())

    res.json({id_usuario:req.params.id})

})




servidor.listen(8000)