const { Driver, Teams } = require("../../../db");

const postDriverController = async ({
  name,
  lastName,
  description,
  image,
  nationality,
  birthdate,
  team,
}) => {
  try {
    const driver = await Driver.create({
      name,
      lastName,
      description,
      image: image
        ? img
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lance_Reventlow_and_actress_Cheryl_Holdridge_wedding_portrait%2C_Calif.%2C_1964.jpg/800px-Lance_Reventlow_and_actress_Cheryl_Holdridge_wedding_portrait%2C_Calif.%2C_1964.jpg",
      nationality,
      birthdate,
      team,
    });

    if (team && team.lenght > 0) {
      const Team = await Teams.findAll({
        where: {
          name: team,
        },
      });
      const relationTables = await driver.addTeams(Team);
      return relationTables;
    }
    return driver;
  } catch (error) {
    return console.log(`ERROR EN EL CONTROLLER POST: ${error}`);
  }
};

module.exports = postDriverController;
