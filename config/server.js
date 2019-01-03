var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/db_connection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;