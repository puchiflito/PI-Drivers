import { GET_ALL_DRIVER, GET_ALL_TEAMS } from "./type";

const urlDriver = "http://localhost:3001/driver";
const urlTeams = "http://localhost:3001/teams";

const getAllDrivers = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(urlDriver);
      const data = await res.json();
      dispatch({
        type: GET_ALL_DRIVER,
        payload: data,
      });
    } catch (error) {
      console.log(`ERROR EN REDUX GET_ALL_DRIVER: ${error}`);
    }
  };
};

const getAllTeams = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(urlTeams);
      const data = await res.json();

      dispatch({
        type: GET_ALL_TEAMS,
        payload: data,
      });
    } catch (error) {
      return console.log(`ERROR AL TRAER LOS TEAMS DESDE REDUX: ${error}`);
    }
  };
};

export { getAllDrivers, getAllTeams };
