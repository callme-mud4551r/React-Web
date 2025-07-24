const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();

const { sequelize } = require('./models');

app.use(cors());
app.use(express.json());
app.use('/api/todos', require('./routes/todos'));

// Connect and sync your database BEFORE Lambda cold starts to optimize performance:
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database synchronized.');
  })
  .catch((err) => {
    console.error('Unable to connect to or sync the database:', err);
  });

// EXPORT the Lambda handler instead of listening on a port
module.exports.handler = serverless(app);
