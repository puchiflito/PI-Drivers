const { Driver, Teams } = require("../../../db");

const allDriversDB = async () => {
  try {
    const dbDrivers = await Driver.findAll({
      include: {
        model: Teams,
        attributes: ["name"],
      },
    });
    if (!dbDrivers) {
      return "Ningun dato en la DB";
    } else {
      return dbDrivers;
    }
  } catch (error) {
    return console.log("ERROR DEL CONTROLLER DB: ", error);
  }
};

const allDriverApi = async () => {
  try {
    const driverApi = await fetch("http://localhost:5000/drivers");
    const data = await driverApi.json();
    return data;
  } catch (error) {
    return console.log("ERROR EN LA API DEL CONTROLLER: ", error);
  }
};

const concatedDbAndApi = async () => {
  try {
    const api = await allDriverApi();
    const db = await allDriversDB();
    const info = api.concat(db);

    return info;
  } catch (error) {
    return console.log("ERROR AL CONCATENAR LA DB CON LA API: ", error);
  }
};
module.exports = { allDriversDB, allDriverApi, concatedDbAndApi };
