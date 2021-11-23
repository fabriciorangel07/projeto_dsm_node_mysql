const express = require('express');
const veiculosveiControllers = require('../controllers/veiculosveiControllers');
const router  = express.Router ();

const veiculosveiControllers = require ('../controllers/veiculosveiControllers')

// router.get('/', (req, res) => {
//     return res.json ('Rota Raiz Encontrada');
// });

router.get('/proprietarios', veiculosveiControllers.index);
router.post('/proprietarios', veiculosveiControllers.store);

module.exports = router;