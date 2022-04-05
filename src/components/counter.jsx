import React, { useState } from "react";
import "./counter.scss";

function Counter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const decrementCount = () => setCount((prevCount) => prevCount - increment);
  const incrementCount = () => setCount((prevCount) => prevCount + increment);

  const changeClass = () =>
    count > 0 ? "positive" : count < 0 ? "negative" : "";

  const incrementMore = () => setIncrement((prevCount) => prevCount + 1);
  const incrementLess = () => setIncrement((prevCount) => prevCount - 1);

  return (
    <div className="Counter">
      <h1 className={changeClass() + " count"}>{count}</h1>
      <h1 className="increment">{increment}</h1>
      <div className="button-wrapper increment-button-wrapper">
        <button onClick={incrementLess}>-</button>
        <button onClick={incrementMore}>+</button>
      </div>
      <div className="button-wrapper">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default Counter;
