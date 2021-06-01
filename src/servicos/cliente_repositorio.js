const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize")

class Cliente extends Model {}
Cliente.init({
  nome: DataTypes.STRING,
  cpf: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'clientes' });

module.exports = {
  inserir: async cliente => {
    await sequelize.sync();
    return await Cliente.create(cliente);
  },
  atualizar: async (id, cliente) => {
    await sequelize.sync();
    let clienteDb = await Cliente.findByPk(id)
    return await clienteDb.update(cliente)
  },
  buscar: async parans => {
    await sequelize.sync();
    return await Cliente.findAll(parans);
  },
  apagar: async id => {
    await sequelize.sync();
    return await Cliente.destroy({where: {id: id}});
  }
}