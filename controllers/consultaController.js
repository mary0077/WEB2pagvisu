const Jogos = require('../models/jogos');



const consultaController = {
  realizarConsulta: async (req, res) => {
    try {
      // Receba os parâmetros de filtro da requisição
      const { horario, equipe_casa, equipe_visitante, placar_casa, placar_visitante, placar_local, local } = req.query;

      // Realize a consulta no banco de dados com base nos parâmetros
      const resultados = await Jogos.findAll({
        where: {
          horario: horario || null,
          equipe_casa: equipe_casa || null,
          equipe_visitante: equipe_visitante || null,
          placar_casa: placar_casa || null,
          placar_visitante: placar_visitante || null,
          local: local || null
        }
      });
      

      // Renderize a view que exibirá os resultados da consulta
      res.render('resultado', { resultados });
    } catch (error) {
      console.error('Erro ao realizar consulta:', error);
      res.status(500).send('Erro ao realizar consulta');
    }
  },
};

module.exports = consultaController;
