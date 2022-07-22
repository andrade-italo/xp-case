const express = require('express');

const app = express();

app.use(express.json());
const investimentos = require('./database/routes/investimentos');

app.use('/investimentos', investimentos);
module.exports = app;
