import { GET_ALL_DRIVER } from "./type";

const urlDriver = "http://localhost:3001/driver";
const urlTeams = "http://localhost:3001/teams";

const getAll = () => {
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

export { getAll };
