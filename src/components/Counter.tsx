import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../core/redux/store";
import {
  decreaseCount,
  increaseCount,
  resetCount,
} from "../core/redux/actions/actions-create";
import { useAppDispatch, useAppSelector } from "../core/hooks";

function Counter() {
  const count = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increaseCount(10));
        }}
      >
        Click increase
      </button>
      <button
        onClick={() => {
          dispatch(decreaseCount(10));
        }}
      >
        Click decrease
      </button>
      <button
        onClick={() => {
          dispatch(resetCount());
        }}
      >
        Click reset
      </button>
    </div>
  );
}

export default Counter;
