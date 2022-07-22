const Carteiras = require('./carteiras.json');
const Clientes = require('./clientes.json');
const Ativos = require('./ativos.json');

const mockCreate = (Instance, data) => {
  if (!data) {
    return false;
  }

  const newData = data;
  if (!newData.codCliente) {
    newData.codCliente = 4;
  }
  Instance.push(newData);
  return newData;
};

const mockFindOne = (Instance, where) => {
  if (!where) {
    return Instance[0];
  }

  const entries = Object.entries(where);
  let result;

  entries.forEach((entry) => {
    const [key, value] = [entry[0], entry[1]];

    const index = Instance
      .findIndex((item) => !!item[key] && item[key] === value);
    if (index !== -1) {
      result = Instance[index];
    }
  });

  return result;
};

const CarteiraMock = {
  create: async (data) => mockCreate(Carteiras, data),
  findOne: async ({ where }) => mockFindOne(Carteiras, where),
};

const ClienteMock = {
  create: async (data) => mockCreate(Clientes, data),
  findOne: async ({ where }) => mockFindOne(Clientes, where),
};

const AtivoMock = {
  findAll: async () => Ativos,
  findOne: async ({ where }) => mockFindOne(Ativos, where),
  create: async (data) => mockCreate(Ativos, data),

};

module.exports = {
  CarteiraMock,
  ClienteMock,
  AtivoMock,
};
