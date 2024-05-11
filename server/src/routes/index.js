const { Router } = require("express");
const { allDriverHandler } = require("../handlers/index.handler");

const router = Router();

//Drivers
router.get("/driver", allDriverHandler);
// Teams

module.exports = router;
