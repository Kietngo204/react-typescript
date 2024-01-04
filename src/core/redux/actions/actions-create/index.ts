import { Dispatch } from "@reduxjs/toolkit";
import { CountType } from "../../constants";
import { Action } from "..";

export const increaseCount = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: CountType.INCREASE,
      payload: amount,
    });
  };
};

export const decreaseCount = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: CountType.DECREASE,
      payload: amount,
    });
  };
};

export const resetCount = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: CountType.RESET,
    });
  };
};
