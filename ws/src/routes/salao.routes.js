const express = require('express');
const routes = express.Router();
const Salao = require('../models/salao');

routes.post('/', async (req, res) => {
  try {

    const salao = await Salao(req.body).save();
    res.json({ salao });
    
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = routes;