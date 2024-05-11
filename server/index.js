const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const {
  saveTeamsDB,
} = require("./src/controllers/Team/getAllTeam.controller.js");

conn
  .sync()
  .then(() => {
    server.listen(PORT, async () => {
      // await saveTeamsDB();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

// { force: true }
