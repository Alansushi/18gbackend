import logo from "./logo.svg";

import { useState } from "react";
import "./App.css";
//components
import Title from "./components/Title";
import Nombre from "./components/Fullname/fullname";

import "./components/Fullname/buttons.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };

  const isMultiple = count % 5 === 0 && count !== 0 ? true : false;
  const countType = isMultiple ? "Es multiplo de 5" : "No es multiplo de 5";
  const countClass = isMultiple ? "active" : "inactivo";

  const isOdd = count % 2 === 0 && count !== 0 ? true : false;
  const countTypeOdd = isOdd ? "ON" : "OFF";
  const countClassOdd = isOdd ? "azul" : "rojo";
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
        <p className={countClass}>
          Counter: {count}, {countType}
        </p>

        <button onClick={() => handleClick(true)}>Increase</button>
        <div className={countClassOdd}>{countTypeOdd}</div>
      </header>
    </div>
  );
}

export default App;
