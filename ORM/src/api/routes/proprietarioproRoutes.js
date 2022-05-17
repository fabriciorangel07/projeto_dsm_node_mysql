const express = require('express');
const router = express.Router();

const proprietarioproControllers = require ('../controllers/proprietarioproControllers');

router.get('/proprietario', proprietarioproControllers.index);

router.post('/proprietario', proprietarioproControllers.store);

router.put('/proprietario/:codigo', proprietarioproControllers.update);

router.delete('/proprietario/:codigo', proprietarioproControllers.delete);

module.exports = router;