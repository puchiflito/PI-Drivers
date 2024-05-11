const { Router } = require("express");
const {
  allDriverHandler,
  getIdDriverHandler,
  postDriverHandler,
  getAllTeamsHandler,
} = require("../handlers/index.handler");

const router = Router();

//Drivers
router.get("/driver", allDriverHandler);
router.get("/driver/:id", getIdDriverHandler);
router.post("/driver", postDriverHandler);
// Teams
router.get("/teams", getAllTeamsHandler);

module.exports = router;
