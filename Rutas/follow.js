const express = require('express');
const router = express.Router();
const procesaDatos = require ('../procesaDatos');

router.put('/follow/:id', function(req, res) {
    procesaDatos.agregarSeguidor(req.params.id);
    res.send('Ya sigue a ese artista');
});


router.put('/unfollow/:id', function(req, res) {
    procesaDatos.sacarSeguidor(req.params.id);
    res.send('Ya dejo de seguir a ese artista.')
});

module.exports = router;