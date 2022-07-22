// const chai, { use } = require('chai');
// const { stub } = require('sinon');
// const chaiHttp = require('chai-http');

// const app = require('../../../src/app');

// use(chaiHttp);

// const { expect } = chai;

// describe('A requisição deve possuir um token valido', () => {
//   let token;
//   let postInvestimento;

//   before(async () => {
//     await chai
//       .request(app)
//       .post('/login')
//       .send({ email: 'italo@gmail.com', senha: 123456 })
//       .then(({ body }) => {
//         const result = JSON.parse(body);
//         token = result.token;
//       });
//     postInvestimento = await chai
//       .request(app)
//       .post('/investimento/comprar')
//       .send({
//         codCliente: 1,
//         codAtivo: 1,
//         qtdeAtivo: 100,
//       })
//       .set({ Authorization: token })
//       .then((e) => e);

//     it('Ao fazer a requisição sem um token valido, retorna status 422 e a mensagem', async () => {
//       expect(postInvestimento.request.header).to.have.property('Authorization');
//     });
//   });
// });

// // postInvestimento = await chai
// // .request(app)
// // .get('/')
// // .then(({ body }) => body);
