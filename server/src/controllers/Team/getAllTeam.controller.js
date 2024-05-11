// const { Teams } = require("../../db");

// const teamsApi = async (data) => {
//   // Extrae los nombres de los equipos y los agrega al Set
//   console.log("Data: ", data);
//   const teamSet = new Set(data.map((equipo) => equipo.name));

//   // Convierte el Set a un arreglo de objetos para mantener la estructura original
//   const uniqueTeams = [...teamSet].map((name) => ({ name }));

//   return uniqueTeams;
// };

// const saveTeamsDB = async () => {
//   try {
//     const api = await fetch(" http://localhost:5000/drivers");
//     const data = await api.json;
//     const teams = teamsApi(data);
//     const trueDB = await Teams.findAll();
//     if (trueDB.length <= 0) {
//       await Teams.bulkCreate(teams);
//       return console.log("LOS TEAM SE GUARDARON EN LA DB");
//     } else {
//       return console.log("LOS TEAM YA SE CARGARON ANTERIORMENTE");
//     }
//   } catch (error) {
//     return console.log(`ERROR AL CARGAR LOS TEAMS EN LA DB: ${error}`);
//   }
// };

// const getAllTeams = async () => {
//   try {
//     return await Teams.findAll();
//   } catch (error) {
//     return console.log(`ERROR AL TRAER LOS TEAM DE LA DB: ${error}`);
//   }
// };
// module.exports = { saveTeamsDB, getAllTeams };

const { Teams } = require("../../db");

// const teamsApi = async (data) => {
//   const team = await data.map((t) => {
//     if (t.teams) {
//       return { name: t.teams };
//     }
//   });
//   return team.filter(Boolean);
// };

const teamsApi = async (data) => {
  const uniqueTeamNames = new Set();

  // Itera sobre los datos y agrega los nombres de equipos únicos al conjunto
  data.forEach((t) => {
    if (t.teams) {
      uniqueTeamNames.add(t.teams);
    }
  });

  // Convierte el conjunto a un array de objetos
  const uniqueTeams = [...uniqueTeamNames].map((name) => ({ name }));

  return uniqueTeams;
};

const saveTeamsDB = async () => {
  try {
    const response = await fetch("http://localhost:5000/drivers");
    const data = await response.json();

    // Espera a que teamsApi resuelva antes de continuar
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
