const { Teams } = require("../../db");

const teamsApi = async (data) => {
  const uniqueTeamNames = new Set();

  data.forEach((t) => {
    if (t.teams) {
      uniqueTeamNames.add(t.teams);
    }
  });

  const uniqueTeams = [...uniqueTeamNames].map((name) => ({ name }));

  return uniqueTeams;
};

const saveTeamsDB = async () => {
  try {
    const response = await fetch("http://localhost:5000/drivers");
    const data = await response.json();

    const teams = await teamsApi(data);

    const trueDB = await Teams.findAll();
    if (trueDB.length <= 0) {
      await Teams.bulkCreate(teams);
      console.log("teams guardando: ", teams);
      console.log("Los equipos se guardaron en la base de datos.");
    } else {
      console.log("Los equipos ya se cargaron anteriormente.");
    }
  } catch (error) {
    console.error(
      `Error al cargar los equipos en la base de datos: ${error.message}`
    );
  }
};

const getAllTeams = async () => {
  try {
    const team = await Teams.findAll();
    return team;
  } catch (error) {
    console.error(`Error al obtener los equipos de la base de datos: ${error}`);
  }
};

module.exports = { saveTeamsDB, getAllTeams };
