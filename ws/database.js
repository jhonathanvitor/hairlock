const dotenv = require('dotenv');
const mongoose = require('mongoose');

const URI = process.env.STRING_URL;

dotenv.config();

mongoose
  .connect(process.env.STRING_URL)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log(err));
