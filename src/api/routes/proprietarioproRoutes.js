const express = require('express');
const router  = express.Router ();

const proprietarioproControllers = require ('../controllers/proprietarioproControllers')

router.get('/proprietarios', proprietarioproControllers.index);

router.post('/proprietarios', proprietarioproControllers.store);

router.put('/proprietarios', proprietarioproControllers.update);

router.delete('/proprietarios', proprietarioproControllers.delete);

module.exports = router;