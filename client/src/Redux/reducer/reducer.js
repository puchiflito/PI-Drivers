import { GET_ALL_DRIVER } from "../actions/type";
const initialState = {
  driver: [],
};

const reducer = (state = initialState, action) => {
  switch (action.payload) {
    case GET_ALL_DRIVER:
      return {
        ...state,
        driver: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
