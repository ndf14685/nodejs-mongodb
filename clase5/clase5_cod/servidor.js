const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const personaDatos = require("./modulos/personadatos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const handlebars_object = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
});
app.engine("hbs",handlebars_object.engine);
app.set("view engine","hbs");

app.route("/")
    .get((req,res) => {
      res.render("nuevapersona");  
    })
    .post((req,res) => {
        personaDatos.Guardar(
            req.body.nombre, 
            req.body.apellido, 
            req.body.edad,
            (err) => {
            if(err){
                res.send(err.message);
            }else{
                res.redirect("/listar");
            }
        });
    });

app.route("/listar")
    .get((req,res) => {
        personaDatos.Listar((err,datos) => {
            if(err){
                res.send("Hubo un error al buscar los registros" + err);
            } else {
                res.render("personas", {
                    personasData: datos
                });
            }
        });
    })

app.route("/ver")
    .get((req,res) => {
        personaDatos.Obtener(req.query.id, (err, datos) => {
            if(err){
                res.send(err);
            }else{
                console.log(datos);
                res.render("editarpersona", {
                    persona: datos
                });
            }
        })
    })
    .post((req,res) => {
        personaDatos.Actualizar(
            req.body.id,
            req.body.nombre,
            req.body.apellido,
            req.body.edad,
            (err, datos) => {
                if(err){
                    res.send(err);
                }else{
                    res.redirect("/listado");
                }
            }
        )
    })

    app.listen(3000);