import { MobileType } from "../../../components/Products";
import { CountType, MobileConsTant } from "../constants";

interface IncreaseAction {
  type: CountType.INCREASE;
  payload: number;
}

interface DecreaseAction {
  type: CountType.DECREASE;
  payload: number;
}

interface ResetAction {
  type: CountType.RESET;
}

export type Action = IncreaseAction | DecreaseAction | ResetAction;

export interface SetMobileAction {
  type: MobileConsTant.SET_DATA;
  payload: MobileType[];
}
