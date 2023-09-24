const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateTaskToUpdate = (req, res, next) => {
  const { text = null, completed = null } = req.body;

  if (text && typeof text !== 'string') {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: 'Campos inválidos' });
  }

  if (typeof completed !== 'boolean') {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: 'Campos inválidos' });
  }

  next();
};

module.exports = validateTaskToUpdate;
