const app = require('./app');

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
