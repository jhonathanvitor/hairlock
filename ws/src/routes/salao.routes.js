const express = require('express');
const routes = express.Router();
const Salao = require('../models/salao');
const Servico = require('../models/servico');

routes.post('/', async (req, res) => {
  try {

    const salao = await Salao(req.body).save();
    res.json({ salao });
    
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

routes.get('/servicos/:salaoId', async (req, res) => {
  try {
    const { salaoId } = req.params;

    const servicos = await Servico.find({
      salaoId,
      status: 'A'
    }).select('_id, titulo');

    /* Para o frontend [{ label: 'Serviço', value: 'id do serviço' }] */
    res.json({
      servicos: servicos.map(e => ({ label: e.titulo, value: e._id }))
    })

  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = routes;