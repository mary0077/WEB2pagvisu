const express = require('express');
const router = express.Router();
const jogosController = require('../controllers/jogosController');

router.get('/jogos/:equipe', jogosController.consultarPorEquipe);

module.exports = router;