const express = require('express');

const app = express();

app.use(express.json());
const investimentos = require('./database/routes/investimentos');
const client = require('./database/routes/client');

app.use('/investimentos', investimentos);
app.use('/client', client);
module.exports = app;
