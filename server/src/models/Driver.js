const { DataTypes } = require("sequelize");

const { v4: uuid } = require("uuid");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Driver", {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuid(),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lance_Reventlow_and_actress_Cheryl_Holdridge_wedding_portrait%2C_Calif.%2C_1964.jpg/800px-Lance_Reventlow_and_actress_Cheryl_Holdridge_wedding_portrait%2C_Calif.%2C_1964.jpg",
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
