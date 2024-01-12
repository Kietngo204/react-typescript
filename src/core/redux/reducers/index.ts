import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import mobileReducer from "./mobileReducer";

const rootReducers = combineReducers({
  counter: countReducer,
  mobile: mobileReducer,
});

export default rootReducers;
