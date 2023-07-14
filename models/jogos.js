const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jogos = sequelize.define(
  'Jogos', 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

sequelize.sync()
  .then(() => {
    console.log('Tabela Jogos criada com sucesso!');
    // Criar dados para a tabela Jogos


    return Jogos.bulkCreate([
      { horario: '15:00', equipe_casa: 'Time A', equipe_visitante: 'Time B', placar_casa: 2, placar_visitante: 1, local: 'Estádio X' },
      { horario: '17:30', equipe_casa: 'Time C', equipe_visitante: 'Time D', placar_casa: 0, placar_visitante: 0, local: 'Estádio Y' },
    ]);
  })
  .then(() => {
    console.log('Dados inseridos na tabela Jogos!');
  })
  .catch((error) => {
    console.log('Erro ao criar tabela Jogos:', error);
  });
  module.exports = Jogos;