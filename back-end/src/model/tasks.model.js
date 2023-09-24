const connection = require('../db/connection');

const getAll = async () => {
  const query = 'SELECT * FROM tasks';
  const [tasks] = await connection.execute(query);
  return tasks;
};

const getByText = async (text) => {
  const query = 'SELECT * FROM tasks WHERE text LIKE ?';
  const [tasks] = await connection.execute(query, [`%${text}%`]);
  return tasks;
};

const post = async (task) => {
  const { text } = task;
  const query = 'INSERT INTO tasks (text, completed) VALUES (?)';
  const [result] = await connection.execute(query, [text, false]);
  const id = result.insertId;
  return { id, ...task };
};

const update = async (taskId, newData) => {
  const { text, completed } = newData;
  const query = 'UPDATE tasks SET text = ?, completed = ? WHERE id = ?';
  await connection.execute(query, [text, completed, taskId]);
  return { id: taskId, text, completed };
};

const remove = async (taskId) => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  await connection.execute(query, [taskId]);
};

module.exports = {
  getAll,
  getByText,
  post,
  update,
  remove,
};
