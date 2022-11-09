const express = require('express');
const routes = express.Router();
const Salao = require('../models/salao');
const Servico = require('../models/servico');

routes.post('/', async (req, res) => {
  try {
    
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = routes;