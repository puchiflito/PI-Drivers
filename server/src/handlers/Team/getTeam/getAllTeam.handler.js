const { getAllTeams } = require("../../../controllers/index.controler");

const getAllTeamsHandler = async (req, res) => {
  try {
    const allTeams = await getAllTeams();
    res.status(200).json(allTeams);
  } catch (error) {
    res.status(500).json({ message: `ERROR DEL SERVIDOR: ${error}` });
  }
};

module.exports = getAllTeamsHandler;
