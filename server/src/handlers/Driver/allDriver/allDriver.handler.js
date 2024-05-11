const { concatedDbAndApi } = require("../../../controllers/index.controler");

const allDriverHandler = async (req, res) => {
  try {
    const allDriver = await concatedDbAndApi();
    if (!allDriver) res.status(400).json({ message: "Esta sin informacion" });
    res.status(200).json(allDriver);
  } catch (error) {
    res.status(500).json({ message: "ERROR DEL SERVIDOR: ", error });
  }
};

module.exports = allDriverHandler;
