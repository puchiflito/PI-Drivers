const {
  concatedDbAndApi,
} = require("./Drivers/allDrivers/allDriver.controller");
const getIdDriverController = require("./Drivers/getIdDriver/getIdDriver.controller");
const postDriverController = require("./Drivers/postDriver/postDriver.controller");
// TEAMS
const { getAllTeams } = require("./Team/getAllTeam.controller");
module.exports = {
  concatedDbAndApi,
  getIdDriverController,
  postDriverController,
  getAllTeams,
};
