const express = require ('express');
const app = express();
const port = 8500;
const json = require ('body-parser').json;
const follow = require ('./Rutas/follow');
const rutas = require ('./Rutas/rutas');

// Middleware 
app.use(json())  // permite que podamos usar req.body sin problemas


app.use('/artist', follow);
app.use('/artist', rutas)

  //Manejo de error
app.use(function (req, res, next) {
    res.status(404).send("Disculpe, no pudimos encontrar lo que estaba buscando.")
  });

// Levantar el servidor 
app.listen(port, () => {
    console.log(`El puerto esta levantado en ${port}`)
  });