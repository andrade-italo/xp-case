import Carteira, { CarteiraAttributes } from '../models/carteira';

const InvestService = (payload: CarteiraAttributes) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const created = Carteira.create({ codAtivo, codCliente, qtdeAtivo });
  return created;
};

export default InvestService;
