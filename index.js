const express = require('express');

const app = express();
const port = 3000;
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const db = require('./services/db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log(process.env.POSTGRES_USER);

const connect = async () => {
  try {
    console.log('Trying to connect to the database...');
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
