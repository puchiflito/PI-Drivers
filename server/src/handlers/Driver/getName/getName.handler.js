const { getNameController } = require("../../../controllers/index.controler");

const getNameHandler = async (req, res) => {
  try {
    const name = req.query["name.forename"];
    const getName = await getNameController({ name });

    if (!getName || getName.length === 0) {
      res
        .status(400)
        .json({ message: `No se encontro nada con lo ingresado: ${name}` });
    } else {
      res.status(200).json(getName);
    }
  } catch (error) {
    res.status(500).json({ message: `ERROR DEL SERVIDOR: ${error}` });
  }
};

module.exports = getNameHandler;
