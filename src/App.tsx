import React, { useState } from "react";

import logo from "../res/logo_128.png";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="wrapper">
      <img src={logo} alt="Electron logo" />
      <h1>Welcome to Electron with React and Typescript</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter: {counter}
      </button>
    </div>
  );
};

export default App;
