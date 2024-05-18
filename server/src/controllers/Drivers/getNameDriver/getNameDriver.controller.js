const { Driver, Teams } = require("../../../db");
const { Op } = require("sequelize");
const { allDriverApi } = require("../allDrivers/allDriver.controller");

const getNameController = async ({ name }) => {
  try {
    const getNameDb = await Driver.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Teams,
      },
    });

    if (getNameDb.length > 0) {
      return getNameDb;
    }

    const data = await allDriverApi();

    const filteredData = data.filter((driver) =>
      driver.name.forename.toLowerCase().includes(name.toLowerCase())
    );

    return filteredData;
  } catch (error) {
    console.error(`ERROR EN EL CONTROLLER: ${error}`);
    throw error;
  }
};

module.exports = getNameController;
