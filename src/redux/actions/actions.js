import { constants } from "./constants";
import axios from "axios";

export const fetch_success = (data) => {
  return {
    type: constants.FETCH_SUCCESS,
    payload: data
  };
};

export const fetch_failed = () => {
  return {
    type: constants.FETCH_FAILED
  };
};

export const fetching_data = () => {
  return {
    type: constants.FETCHING_DATA
  };
};

//thunked actions

export const fetch_data = (data) => async (dispatch, getState) => {
  // indicate that we are fetching our data
  dispatch(fetching_data());
  // country will come from our data (search field)
  axios
    .get(`https://api.covid19api.com/country/${data.country_code}`)
    .then((response) => {
      console.log(response);
      dispatch(fetch_success(response.data));
      //Country
      //Confirmed Deaths Recovered by  -- Date --
    })
    .catch((error) => {
      console.log("Invalid Country Code");
      dispatch(fetch_failed());
    });
};
