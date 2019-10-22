const express = require('express');
const app = express();
const router = express.Router();


//Rotas
const index = require('./routes/index');
const bibleRoute = require('./routes/bibleRoutes');

app.use('/', index);
app.use('/bibles', bibleRoute);


module.exports = app;
