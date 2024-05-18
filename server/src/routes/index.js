// const { Router } = require("express");
// const {
//   allDriverHandler,
//   getIdDriverHandler,
//   postDriverHandler,
//   getAllTeamsHandler,
//   getNameHandler,
// } = require("../handlers/index.handler");

// const router = Router();

// //Drivers
// router.get("/driver", allDriverHandler);
// router.get("/driver", getNameHandler);
// router.get("/driver/:id", getIdDriverHandler);
// router.post("/driver", postDriverHandler);
// // Teams
// router.get("/teams", getAllTeamsHandler);

// module.exports = router;

const { Router } = require("express");
const {
  allDriverHandler,
  getIdDriverHandler,
  postDriverHandler,
  getAllTeamsHandler,
  getNameHandler,
} = require("../handlers/index.handler");

const router = Router();

// Drivers
router.get("/driver/name", getNameHandler); // Asigna una ruta específica para la búsqueda por nombre
router.get("/driver", allDriverHandler);
router.get("/driver/:id", getIdDriverHandler);
router.post("/driver", postDriverHandler);
// Teams
router.get("/teams", getAllTeamsHandler);

module.exports = router;
