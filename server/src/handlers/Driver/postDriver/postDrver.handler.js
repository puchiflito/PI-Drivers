const {
  postDriverController,
} = require("../../../controllers/index.controler");

const postDriverHandler = async (req, res) => {
  try {
    const { name, lastName, description, image, nationality, birthdate, team } =
      req.body;
    const driver = await postDriverController({
      name,
      lastName,
      description,
      image,
      nationality,
      birthdate,
      team,
    });
    if (!driver) {
      return res.status(400).json({ message: "Faltan datos por completar" });
    } else {
      return res.status(200).json(driver);
    }
  } catch (error) {
    return res.status(500).json({ message: `ERROR DEL SERVIDOR: ${error}` });
  }
};

module.exports = postDriverHandler;
