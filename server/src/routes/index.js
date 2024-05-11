const { Router } = require("express");
const {
  allDriverHandler,
  getIdDriverHandler,
} = require("../handlers/index.handler");

const router = Router();

//Drivers
router.get("/driver", allDriverHandler);
router.get("/driver/:id", getIdDriverHandler);
// Teams

module.exports = router;
