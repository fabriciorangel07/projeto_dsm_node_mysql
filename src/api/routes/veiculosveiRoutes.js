const express = require('express');
const router  = express.Router ();

const veiculosveiControllers = require ('../controllers/veiculosveiControllers')

router.get('/veiculos', veiculosveiControllers.index);

router.post('/veiculos', veiculosveiControllers.store);

router.put('/veiculos/:codigo', veiculosveiControllers.update);

router.delete('/veiculos/:codigo', veiculosveiControllers.delete);

module.exports = router;