/* eslint-disable import/no-import-module-exports */
import { CarteiraAttributes } from '../../../src/database/models/carteira';
import { ClienteAttributes } from '../../../src/database/models/cliente';

const Carteiras = require('./carteiras.json');
const Clientes = require('./clientes.json');
const Ativos = require('./ativos.json');

interface AllData extends ClienteAttributes, CarteiraAttributes {
  codCliente: number;
}

const mockCreate = (Instance: [{}], data: AllData) => {
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

const mockFindOne = (Instance: any[], where: { [s: string]: unknown; } | ArrayLike<unknown>) => {
  if (!where) {
    return Instance[0];
  }

  const entries = Object.entries(where);
  let result;

  entries.forEach((entry) => {
    const [key, value] = [entry[0], entry[1]];

    const index = Instance
      .findIndex((item: { [x: string]: unknown; }) => !!item[key] && item[key] === value);
    if (index !== -1) {
      result = Instance[index];
    }
  });

  return result;
};

const CarteiraMock = {
  create: async (data: AllData) => mockCreate(Carteiras, data),
  findOne: async ({ where }: any) => mockFindOne(Carteiras, where),
};

const ClienteMock = {
  create: async (data: AllData) => mockCreate(Clientes, data),
  findOne: async ({ where }: any) => mockFindOne(Clientes, where),
};

const AtivoMock = {
  findAll: async () => Ativos,
  findOne: async ({ where }: any) => mockFindOne(Ativos, where),
  create: async (data: AllData) => mockCreate(Ativos, data),

};

export default {
  CarteiraMock,
  ClienteMock,
  AtivoMock,
};
