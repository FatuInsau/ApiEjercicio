const express = require('express');
const router = express.Router();
const procesaDatos = require ('../procesaDatos')


// ruta get
router.get('/', (req, res) => {
    // mostrar todos los artistas 
    res.json(procesaDatos.mostrar());
  });

// ruta post 
router.post('/', (req, res) => {
    // crear un artista nuevo
    procesaDatos.crear(req.body);
    res.send(`El artista ${req.body.nombre} fue creado con exito.`)
  });

// ruta put 
router.put('/:id', (req, res) => {
    // modificar un artista existente
    procesaDatos.modificar(req.params.id,req.body)
    res.send(`El artista ${req.body.nombre} fue modificado con exito.`)
  });

// ruta delete
router.delete('/:id', (req, res) => {
    // eliminar un artista
    procesaDatos.eliminar(req.params.id);
    res.send('El artista fue eliminado con exito.')
  });

module.exports = router;