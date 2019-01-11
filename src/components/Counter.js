import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onClear, onIncby5 }) => (
  <div>
    <h1>Value: {value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <button onClick={onClear}>Clear</button>
    <button onClick={onIncby5}>+5</button>
  </div>
);

export default Counter;
