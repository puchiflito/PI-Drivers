const { Driver, Teams } = require("../../../db");

const getIdDriverController = async ({ id }) => {
  try {
    const api = await fetch(`http://localhost:5000/drivers/${id}`);
    const data = await api.json();

    return data;

    // const response = await fetch(`http://localhost:5000/drivers/${id}`);
    // const data = await response.json(); // Extraer los datos de la respuesta

    // if (typeof data.id !== "number" || data.id < 0) {
    //   return "Debe ser de tipo numérico o ingresar un número mayor a 0";
    // } else {
    //   return data;
    // }

    // const db = await Driver.findOne({
    //   where: { id },
    //   include: Teams,
    // });
    // if (!db) {

    // }
  } catch (error) {
    return console.log("ERROR AL OBTENER EL ID DESDE EL CONTROLLER: ", error);
  }
};

module.exports = getIdDriverController;
