import { constants } from "../actions/constants";

const INIT_STATE = {
  fetching: false,
  data: null
};

export const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.FETCHING_DATA:
      console.log("hello fetching from redux");
    case constants.FETCH_SUCCESS:
      state = { ...state, data: action.payload };
    default:
      return state;
  }
};
