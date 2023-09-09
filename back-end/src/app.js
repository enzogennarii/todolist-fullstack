const express = require('express');

const taskController = require('./tasks.controller');
const mapStatusHTTP = require('./utils/mapStatusHTTP');

const app = express();

app.use(express.json());

// Requisição para teste de funcionamento
app.get('/', (_req, res) => {
  console.log('Requisições funcionando!');
  res.status(200).send('Back-end online!');
});

// Requisição para buscar todas as tarefas do banco de dados
app.get('/tasks', async (_req, res) => {
  try {
    const { status, data } = await taskController.getAll();
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// Requisição para buscar uma tarefa específica pelo texto
app.get('/task', async (req, res) => {
  try {
    const { status, data } = await taskController.getByText(req.query.q);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// Requisição para criar uma nova tarefa
app.post('/task', async (req, res) => {
  try {
    const { status, data } = await taskController.post(req.body);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// Requisição para atualizar uma tarefa existente
app.put('/task/:id', async (req, res) => {
  try {
    const { params: { id }, body } = req;
    const { status, data } = await taskController.update(id, body);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

// Requisição para deletar uma tarefa
app.delete('/task/:id', async (req, res) => {
  try {
    const { status } = await taskController.remove(req.params.id);
    res.status(mapStatusHTTP(status)).end();
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado!' });
  }
});

module.exports = app;
