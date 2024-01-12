import { PayloadAction } from "@reduxjs/toolkit";
import { MobileType } from "../../../components/Products";
import { MobileConsTant } from "../constants";
import { SetMobileAction } from "../actions";

const initialState: MobileType[] = [];

const mobileReducer = (state = initialState, action: SetMobileAction) => {
  switch (action.type) {
    case MobileConsTant.SET_DATA:
      return (state = action.payload);
    default:
      return state;
  }
};

export default mobileReducer;
