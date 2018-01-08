const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', (req, res) => {
  res.status(200).send({
    hello: "goodbye!"
  })
})

app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Majd's world"
}));

module.exports = app;
