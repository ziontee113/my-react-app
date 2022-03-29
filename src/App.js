import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const decrementCount = () => setCount((prevCount) => prevCount - 1);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);
  const changeClass = () =>
    count > 0 ? "positive" : count < 0 ? "negative" : null;

  return (
    <div className="App">
      <h1 className={changeClass()}>{count}</h1>
      <div className="button-wrapper">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
