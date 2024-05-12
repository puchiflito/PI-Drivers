const { Driver, Teams } = require("../../../db");

const getIdDriverController = async ({ id }) => {
  try {
    // Verifica si el ID es un UUID
    const isUUID =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        id
      );

    if (isUUID) {
      const dbDriver = await Driver.findOne({
        where: { id },
        include: Teams,
      });

      if (dbDriver) {
        return dbDriver;
      }
    }

    const api = await fetch(`http://localhost:5000/drivers/${id}`);
    const data = await api.json();

    return data;
  } catch (error) {
    return console.error("ERROR AL OBTENER EL ID DESDE EL CONTROLLER: ", error);
  }
};

module.exports = getIdDriverController;
