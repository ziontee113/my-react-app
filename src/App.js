import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const decrementCount = () => setCount((prevCount) => prevCount - 1);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="button-wrapper">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
