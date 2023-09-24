const { taskModel } = require('../model');

const getAll = async () => {
  const tasks = await taskModel.getAll();
  return { status: 'OK', data: tasks };
};

const getByText = async (text) => {
  if (!text || !text.length) return getAll();
  const tasks = await taskModel.getByText(text);
  return { status: 'OK', data: tasks };
};

const post = async (task) => {
  const newTask = await taskModel.post(task);
  return { status: 'CREATED', data: newTask };
};

const update = async (taskId, newData) => {
  const updatedTask = await taskModel.update(Number(taskId), newData);
  return { status: 'OK', data: updatedTask };
};

const remove = async (taskId) => {
  await taskModel.remove(Number(taskId));
  return { status: 'NO_CONTENT' };
};

module.exports = {
  getAll,
  getByText,
  post,
  update,
  remove,
};
