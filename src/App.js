import logo from "./logo.svg";

import { useState } from "react";
import "./App.css";
//components
import Title from "./components/Title";
import Nombre from "./components/Fullname/fullname";

import "./components/Fullname/buttons.css";
// import { click } from "@testing-library/user-event/dist/click";

function App() {
  const [count, setCount] = useState(0);
  // const [state, setState] = useState(0);
  // const [state, setState] = useState(false);
  // const [] = useState(false);
  const handleMouseEnter = (e) => {
    e.target.style.background = "grey";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "blue";
  };

  const handleMouseEnter2 = (e) => {
    e.target.style.color = "grey";
  };
  const handleMouseLeave2 = (e) => {
    e.target.style.color = "white";
  };

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };
  let active;
  const handleClick2 = (number) => {
    active = number;
    if (number === 1) {
      console.log(number);
      console.log(active);
      return active;
      // const countClassClicked = active ? "clicked" : "1";
    }
    if (number === 2) {
      console.log(active);
      return active;
    }
    if (number === 3) {
      console.log(active);
      return active;
    }
    if (number === 4) {
      console.log(active);
      return active;
    }
  };

  const isMultiple = count % 5 === 0 && count !== 0 ? true : false;
  const countType = isMultiple ? "Es multiplo de 5" : "No es multiplo de 5";
  const countClass = isMultiple ? "active" : "inactivo";

  const isOdd = count % 2 === 0 && count !== 0 ? true : false;
  const countTypeOdd = isOdd ? "ON" : "OFF";
  const countClassOdd = isOdd ? "azul" : "rojo";
  function checkNumber(active) {
    const check1 = active === 1 ? true : false;
    console.log(check1);
    const check1Class = check1 ? "clicked" : "1";
    return check1Class;
  }
  console.log(checkNumber());
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
        <div
          className={countClassOdd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {countTypeOdd}
        </div>
        <p
          onClick={() => handleClick2(1)}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className={checkNumber(active)}
        >
          Getting Started
        </p>
        <p
          onClick={() => handleClick2(2)}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className="2"
        >
          Add React to a website
        </p>
        <p
          onClick={() => handleClick2(3)}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          Create a New react App
        </p>
        <p
          onClick={() => handleClick2(4)}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          CDN Links
        </p>
      </header>
    </div>
  );
}

export default App;
