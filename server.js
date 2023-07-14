// Importe os módulos necessários
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const port = 3040;
const consultaController = require('./controllers/consultaController');
const Jogos= require ('./models/jogos');


app.use(express.static('public'));

// Configure a engine de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Defina a rota para a home
app.get('/home', (req, res) => {
  res.render('home');
});

// Defina a rota para consultar
router.get('/consultar', consultaController.realizarConsulta);

// Defina a rota para o formulário de consulta
app.get('/filtro', (req, res) => {
  res.render('filtro');
});

app.get('/topo', (req, res) => {
  res.render('topo');
});

// Use o router
app.use(router);

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
