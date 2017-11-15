const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('./db');
const aggregation = require('./middlewares/aggregation');
const errorHandler = require('./middlewares/error-handler');
const UserController = require('./controllers/UserController');
const CountryController = require('./controllers/CountryController');
const CustomerController = require('./controllers/CustomerController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/users', UserController);
app.use('/api/countries', CountryController);
app.use('/api/customers', CustomerController);
app.get('/api/resources', aggregation);
app.use(errorHandler);

module.exports = app;
