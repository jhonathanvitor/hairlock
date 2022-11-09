const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./database');

const app = express();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// VARIABLES  
app.set('port', 8000);

// ROTAS
app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
  console.log(`WS Escultando na porta ${app.get('port')}`)
});