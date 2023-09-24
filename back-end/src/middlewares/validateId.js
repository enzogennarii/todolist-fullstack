const taskService = require('../service/tasks.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateId = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: 'ID obrigatório.' });
  }

  const { data } = await taskService.getAll();
  if (data.some((task) => task.id === Number(id))) {
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Tarefa não encontrada.' });
  }

  next();
};

module.exports = validateId;
