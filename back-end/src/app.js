const express = require('express');

const tasksRoute = require('./routes/tasks.route');

const app = express();

app.use(express.json());
app.use(tasksRoute);

// Requisição para teste de funcionamento
app.get('/', (_req, res) => {
  console.log('Requisições funcionando!');
  res.status(200).send('Back-end online!');
});

module.exports = app;
