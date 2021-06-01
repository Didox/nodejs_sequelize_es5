const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('clientes_typeorm', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;