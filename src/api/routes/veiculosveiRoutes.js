const express = require('express');
const veiculosveiControllers = require('../controllers/veiculosveiControllers');
const router  = express.Router ();

const veiculosveiControllers = require ('../controllers/veiculosveiControllers')

router.get('/veiculos', veiculosveiControllers.index);
router.post('/veiculos', veiculosveiControllers.store);

module.exports = router;