const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL || 'postgres://postgres:123@localhost:5432/todoapp');

const Todo = require('./todo')(sequelize);

// If you use `sequelize.sync()` or similar, export sequelize as well
module.exports = { sequelize, Todo };
