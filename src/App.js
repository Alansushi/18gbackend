import logo from "./logo.svg";

import { useState } from "react";
import "./App.css";
//components
import Title from "./components/Title";
import Nombre from "./components/Fullname/fullname";

import "./components/Fullname/buttons.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Title text="Alans"></Title>
        <Nombre name="Alan" lastName="Guerrero"></Nombre>

        <p>Counter: {count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>More</button>
          <button onClick={() => setCount(count - 1)}>Less</button>
        </div>
      </header>
    </div>
  );
}

export default App;
