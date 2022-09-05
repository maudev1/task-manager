const express = require('express');
const app = express();
const index = require('./routes/index');
const taskRoute = require('./routes/task');

app.use('/images', express.static('src/public'));
app.use('/', express.static('src/views'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.json({ type: 'application/vnd.api+json' }));

app.set('view engine', 'pug')
app.use(index);

app.use('/api/', taskRoute);

module.exports = app;
