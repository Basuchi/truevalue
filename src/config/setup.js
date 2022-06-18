
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');
var morgan = require('morgan');
var methodOverride = require('method-override');
const app = express();

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json());// middleware -> for processing data 
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
