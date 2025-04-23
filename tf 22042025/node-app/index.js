const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API de pesquisa de satisfação rodando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});