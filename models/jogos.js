const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Jogos extends Model {}

Jogos.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horario: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  equipe_casa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  equipe_visitante: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placar_casa: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  placar_visitante: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Jogos',
  tableName: 'jogos',
});

module.exports = Jogos;
