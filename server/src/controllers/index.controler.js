const {
  concatedDbAndApi,
} = require("./Drivers/allDrivers/allDriver.controller");
const getIdDriverController = require("./Drivers/getIdDriver/getIdDriver.controller");

module.exports = { concatedDbAndApi, getIdDriverController };
