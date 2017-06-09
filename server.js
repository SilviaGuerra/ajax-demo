//Para crear un servidor, esto se debe hacer en cada archivo que quiera

var express = require('express'); //para obtener dependencia de express
var app = express(); //devuelve objeto de lo que tiene express

app.use(express.static(__dirname + '/public'));

/*app.get("/", function (req, res){
  res.send("Hola! :D");
});*/

app.listen(3000, function(){
  console.log("Servidor escuchando en http://localhost:3000");
});
