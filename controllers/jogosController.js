const Jogos = require('../models/jogosModel');

const jogosController = {
  listar: async (req, res) => {
    try {
      const jogos = await Jogos.findAll();
      return res.render('jogos', { jogos });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar jogos.' });
    }
  },

    consultarPorEquipe: async (req, res) => {
      try {
        const equipe = req.params.equipe;
  
        // Consulta no banco de dados com base no parâmetro recebido
        const jogos = await Jogos.findAll({
          where: {
            equipe_casa: equipe,
          },
        });
  
        return res.render('jogos', { jogos });
      } catch (error) {
        return res.status(500).json({ message: 'Erro ao consultar jogos por equipe.' });
      }
    },
  };
  

module.exports = jogosController;
