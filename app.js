
const express = require('express');
const router = require('./src/routes/api');
const app = express();

app.use('/api',router)

module.exports = app;