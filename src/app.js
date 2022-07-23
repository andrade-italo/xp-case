const express = require('express');

const app = express();

app.use(express.json());
const investimentos = require('./database/routes/investimentos');
const client = require('./database/routes/client');
const conta = require('./database/routes/conta');
const assets = require('./database/routes/assets');
const login = require('./database/routes/login');

app.use('/investimentos', investimentos);
app.use('/client', client);
app.use('/assets', assets);
app.use('/conta', conta);
app.use('/login', login);

module.exports = app;
