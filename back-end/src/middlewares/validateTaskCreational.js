const validateTaskCreational = (req, res, next) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: 'Campos inválidos' });
  }

  next();
}

module.exports = validateTaskCreational;
