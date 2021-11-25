const express = require('express');
const router  = express.Router ();

const veiculosveiControllers = require ('../controllers/veiculosveiControllers')

router.get('/veiculo', veiculosveiControllers.index);

router.post('/veiculo', veiculosveiControllers.store);

router.put('/veiculo/:codigo', veiculosveiControllers.update);

router.delete('/veiculo/:codigo', veiculosveiControllers.delete);

module.exports = router;