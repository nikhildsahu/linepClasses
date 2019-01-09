'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

function updateDatabase(data) {
  ... // update the database
  return newValue;
}
app.use(express.static(path.resolve(__dirname, "build")));
app.use(bodyParser);
app.post('*', (res, req) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

module.exports.handler = serverless(app);
