import chai, { use } from 'chai';
import { stub } from 'sinon';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import Carteira from '../../../src/database/models/carteira';
import Cliente from '../../../src/database/models/cliente';
import Ativo from '../../../src/database/models/ativo';

const { CarteiraMock, ClienteMock, AtivoMock } = require('../../mock/models/index');

use(chaiHttp);

const { expect } = chai;

describe('Rota POST /investimentos/comprar', () => {
  let postInvestimento : any;
  let getInvestimento: any;
  const bodyValido: any = { codCliente: 1, codAtivo: 2, qtdeAtivo: 100 };
  before(() => {
    stub(Carteira, 'create')
      .callsFake(CarteiraMock.create);
    stub(Carteira, 'findOne')
      .callsFake(CarteiraMock.findOne);
    stub(Ativo, 'findAll')
      .callsFake(AtivoMock.findAll);
    stub(Ativo, 'findOne')
      .callsFake(AtivoMock.findOne);
    stub(Cliente, 'findOne')
      .callsFake(ClienteMock.findOne);
  });

  describe('Crie endpoint para realizar a compra:', () => {
    before(async () => {
      postInvestimento = await chai
        .request(app)
        .post('/investimento/comprar')
        .send(bodyValido);
      getInvestimento = await chai
        .request(app)
        .get('/carteira')
        .then(({ body }) => body);
    });

    it('Ao fazer a requisição com o body valido, retorna status 201', async () => {
      expect(postInvestimento).to.have.status(201);
      expect(bodyValido.codCliente).to.be(getInvestimento.codCliente);
      expect(bodyValido.codAtivo).to.be(getInvestimento.codAtivo);
      expect(bodyValido.qtdeAtivo).to.be(getInvestimento.qtdeAtivo);
    });
  });

  describe(`O endpoint recebe como entradas o código do ativo,
  a quantidade de ações compradas, número da conta compradora.`, async () => {
    Object.keys(bodyValido).forEach(
      (e) => {
        before(async () => {
          delete bodyValido[e];
          postInvestimento = await chai
            .request(app)
            .post('/investimento/comprar')
            .send(e);
        });
        it(`Ao fazer a requisição faltando algum atributo, retorna a mensagem: "${e} atribute is required`, async () => {
          const { message } = postInvestimento.body;
          expect(message).to.be.eql({ message: `${e} is required` });
        });
        it('Ao fazer a requisição faltando algum atributo, retorna status 400', async () => {
          expect(postInvestimento).to.have.status(400);
        });
      },
    );
  });

  describe(' A quantidade não pode ser menor ou igual a zero.', () => {
    before(async () => {
      postInvestimento = await chai
        .request(app)
        .post('/investimento/comprar')
        .send(bodyValido);
    });

    it('Ao fazer a requisição com o qtdeAtivo menor ou igual a zero, retorna status 422 e a mensagem', async () => {
      expect(postInvestimento).to.have.status(422);
      expect(postInvestimento).to.be.eql({ message: '"qtdeAtivo" must be greater than or equal to 1' });
    });
  });

  describe('O valor total do ativo a ser comprada não pode ser maior que o valor disponível na conta.', () => {
    before(async () => {
      postInvestimento = await chai
        .request(app)
        .post('/investimento/comprar')
        .send({
          codCliente: 1,
          codAtivo: 1,
          qtdeAtivo: 500,
        });
    });

    it('Ao fazer a requisição com o saldo insuficiente, retorna status 422 e { message: saldo insuficiente }', async () => {
      expect(postInvestimento).to.have.status(422);
      expect(postInvestimento).to.be.eql({ message: 'Saldo insuficiente' });
    });
  });

  describe('Quantidade de ativo a ser comprada não pode ser superior ao disponivel no mercado.', () => {
    before(async () => {
      postInvestimento = await chai
        .request(app)
        .post('/investimento/comprar')
        .send({
          codCliente: 1,
          codAtivo: 1,
          qtdeAtivo: 1001,
        });
    });

    it('Ao fazer a requisição com o qtdeAtivo superior ao disponivel, retorna status 422 e a mensagem', async () => {
      expect(postInvestimento).to.have.status(422);
      expect(postInvestimento).to.be.eql({ message: 'Quantidade indisponível' });
    });
  });

  describe('Se não é possível encontrar o ativo: ', async () => {
    before(async () => {
      postInvestimento = await chai
        .request(app)
        .post('/investimento/comprar')
        .send({
          codCliente: 1,
          codAtivo: 9999,
          qtdeAtivo: 100,
        });
    });

    it('a API retorna status 422 e o seguinte body: { "message": "Ativo não encontrado" }', async () => {
      expect(postInvestimento).to.have.status(422);
      expect(postInvestimento).to.be.eql({ message: 'Ativo não encontrado' });
    });
  });
});
