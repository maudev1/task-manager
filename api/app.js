const express = require('express');
const cors = require('cors');
const app = express();

//app.use(cors())
 

//app.listen(3030, function () {
//  console.log('CORS-enabled web server listening on port 80')
//})

const index = require('./src/routes/index');

const taskRoute = require('./src/routes/task');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.json({ type: 'application/vnd.api+json' }));

app.use(index);
app.use('/api/', taskRoute);

module.exports = app;
