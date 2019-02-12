// Require packages and set the port
const express = require('express');
const app = express();
const port = 3002;
const bodyParser = require('body-parser');
//const routes = require('./router1/routes')

console.log(app)
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));