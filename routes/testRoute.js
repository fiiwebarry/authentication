const express = require('express');
const testRouter = express.Router();

testRouter.get('/about', (req, res) => {
  res.send('welcome');
});
