const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log(err));
