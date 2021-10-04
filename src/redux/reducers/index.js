import { combineReducers } from "redux";
import { rootReducer } from "./rootReducer";

const reducers = combineReducers({
  ui: rootReducer
});

export default reducers;
