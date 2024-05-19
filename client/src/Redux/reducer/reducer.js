import { GET_ALL_DRIVER, GET_ALL_TEAMS } from "../actions/type";
const initialState = {
  driver: [],
  teams: [],
  filter: [],
  resetDriver: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVER:
      return {
        ...state,
        driver: action.payload,
        filter: action.payload,
        resetDriver: action.payload,
      };
    case GET_ALL_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
