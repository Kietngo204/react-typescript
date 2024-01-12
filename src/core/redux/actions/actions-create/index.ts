import { Dispatch } from "@reduxjs/toolkit";
import { CountType, MobileConsTant } from "../../constants";
import { Action, SetMobileAction } from "..";
import { MobileType } from "../../../../components/Products";

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

export const setMobile = (data: MobileType[]) => {
  return (dispatch: Dispatch<SetMobileAction>) => {
    dispatch({
      type: MobileConsTant.SET_DATA,
      payload: data,
    });
  };
};
