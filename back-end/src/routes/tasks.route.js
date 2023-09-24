const express = require('express');

const taskController = require('../controller/tasks.controller');
const { validateTaskCreational, validateId } = require('../middlewares');

const tasksRoute = express.Router();

// Requisição para buscar todas as tarefas do banco de dados
tasksRoute.get('/tasks', taskController.getAll);

// Requisição para buscar uma tarefa específica pelo texto
tasksRoute.get('/task', taskController.getByText);

// Requisição para criar uma nova tarefa
tasksRoute.post('/task', validateTaskCreational, taskController.post);

// Requisição para atualizar uma tarefa existente
tasksRoute.put('/task/:id', validateId, taskController.update);

// Requisição para deletar uma tarefa
tasksRoute.delete('/task/:id', validateId, taskController.remove);

module.exports = tasksRoute;
