const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jogos = sequelize.define(
  'Jogos',
  {
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
  },
  {
    tableName: 'jogos',
    timestamps: false,
  }
);

Jogos.sync()
  .then(() => {
    console.log('Tabela Jogos criada com sucesso!');
  })
  .catch((error) => {
    console.log('Erro ao criar tabela Jogos:', error);
  });

module.exports = Jogos;