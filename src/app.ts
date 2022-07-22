import express from 'express';
import Cliente from './database/models/cliente';
// import investimento from './database/routes/investimentos';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  // const {
  //   codAtivo, qtdeAtivo, valor, siglaAtivo,
  // } = req.body;
  // const created = Cliente.create({
  //   cpf: 1,
  //   saldo: 1,
  //   email: 'italo3',
  //   codCliente: 122,
  //   firstName: 'oi',
  //   lastName: 'teste',
  //   senha: 'odio',
  res.status(200).json(Cliente.findAll());
});

export default app;
