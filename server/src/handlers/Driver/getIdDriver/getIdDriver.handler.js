const {
  getIdDriverController,
} = require("../../../controllers/index.controler");

const getIdDriverHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(411).json({ message: "ID no ingresado" });
    } else {
      const driverId = await getIdDriverController({ id });

      if (!driverId) {
        res
          .status(404)
          .json({
            message: "No se encontró ningún conductor con el ID proporcionado",
          });
      } else {
        res.status(200).json(driverId);
      }
    }

    // const { id } = req.params;

    // const driverId = await getIdDriverController({ id });

    //     if (!driverId) {
    //       res.status(411).json({ message: "ID no ingresado" });
    //     } else if (id <= 0) {
    //       res.status(404).json({ message: "El ID debe ser mayor que 0" });
    //     } else {
    //       res.status(200).json(driverId);
    //     }
    // !driverId
    //   ? res.status(411).json({ mssage: "ID no ingresado" })
    //   : typeof id != "number"
    //   ? res.status(406).json({
    //       message: "Tipo de dato incorrecto. Debe ser de tipo numerico",
    //     })
    //   : id <= 0
    //   ? res.status(404).json({ message: "Debe ser mayor a 0" })
    //   : res.status(200).json(driverId);

    // if (!driverId || typeof id === "number" || id < 0) {
    //   return res.status(400).json({
    //     message:
    //       "No se encontro ningun conductor. Debe ser detipo numerico o ingresar un numero mayor a 0",
    //   });
    // } else {
    //   return res.status(200).json(driverId);
    // }
  } catch (error) {
    res.status(500).json({ message: `ERROR DEL SERVIDOR: ${error}` });
  }
};

module.exports = getIdDriverHandler;
