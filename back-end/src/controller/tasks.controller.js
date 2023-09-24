const mapStatusHTTP = require('../utils/mapStatusHTTP');
const taskService = require('../service/tasks.service');

const internalErrorMessage = { message: 'Ops, algo deu errado!' };

const getAll = async (_req, res) => {
  try {
    const { status, data } = await taskService.getAll();
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json(internalErrorMessage);
  }
};

const getByText = async (req, res) => {
  try {
    const { status, data } = await taskService.getByText(req.query.q);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json(internalErrorMessage);
  }
};

const post = async (req, res) => {
  try {
    const { status, data } = await taskService.post(req.body);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json(internalErrorMessage);
  }
};

const update = async (req, res) => {
  try {
    const { params: { id }, body } = req;
    const { status, data } = await taskService.update(id, body);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    res.status(500).json(internalErrorMessage);
  }
};

const remove = async (req, res) => {
  try {
    const { status } = await taskService.remove(req.params.id);
    res.status(mapStatusHTTP(status)).end();
  } catch (e) {
    res.status(500).json(internalErrorMessage);
  }
};

module.exports = {
  getAll,
  getByText,
  post,
  update,
  remove,
};
