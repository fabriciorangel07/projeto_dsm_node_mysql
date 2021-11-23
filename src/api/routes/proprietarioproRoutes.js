const express = require('express');
const proprietariosproControllers = require('../controllers/proprietariosproControllers');
const router  = express.Router ();

const proprietarioproControllers = require ('../controllers/proprietariosproControllers')

// router.get('/', (req, res) => {
//     return res.json ('Rota Raiz Encontrada');
// });

router.get('/proprietarios', proprietarioproControllers.index);
router.post('/proprietarios', proprietarioproControllers.store);

module.exports = router;