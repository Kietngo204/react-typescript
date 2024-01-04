import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./countReducer";

const rootReducers = combineReducers({
  counter: countReducer,
});

export default rootReducers;
