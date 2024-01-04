import { Action } from "../actions";
import { CountType } from "../constants";

const initialState: number = 0;

const countReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CountType.INCREASE:
      return state + action.payload;
    case CountType.DECREASE:
      return state - action.payload;
    case CountType.RESET:
      return 0;
    default:
      return state;
  }
};

export default countReducer;
