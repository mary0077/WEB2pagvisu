const express = require('express');
const app = express();
const port = 3090;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

