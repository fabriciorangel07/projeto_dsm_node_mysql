const express = require('express');
const veiculosveiControllers = require('../controllers/veiculosveiControllers');
const router  = express.Router ();

const veiculosveiControllers = require ('../controllers/veiculosveiControllers')


router.get('/veiculos', proprietarioproControllers.index);

router.post('/veiculos', proprietarioproControllers.store);

router.put('/veiculos', proprietarioproControllers.update);

router.delete('/veiculos', proprietarioproControllers.delete);

module.exports = router;