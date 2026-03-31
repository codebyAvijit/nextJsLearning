"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/slices/counterSlice";

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterSlice.value);
  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-10">
        <h1 className="text-4xl font-bold">Counter</h1>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded border-2"
        >
          Increment
        </button>
        <span className="text-2xl">{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default CounterComponent;
