import logo from "./logo.svg";

import { useState } from "react";
import "./App.css";
//components
import Title from "./components/Title";
import Nombre from "./components/Fullname/fullname";

import "./components/Fullname/buttons.css";
// import { click } from "@testing-library/user-event/dist/click";
function CardItemContent({ title, text }) {
  return (
    <div className="card-item-content">
      <p className="title">{title}</p>
      <p className="content">{text}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "f",
      photoURL:
        "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      photoURL:
        "https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "f",
      photoURL: "https://media4.giphy.com/media/5sYyfIMRcpJWNqdySh/giphy.gif",
    },
    {
      firstName: "Alan",
      lastName: "Guerrero",
      age: 23,
      gender: "m",
      photoURL:
        "https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png",
    },
    {
      firstName: "Aaron",
      lastName: "Enciso",
      age: 24,
      gender: "f",
      photoURL:
        "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg",
    },
    {
      firstName: "Danny",
      lastName: "Vazquez",
      age: 40,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "Danny",
      lastName: "Vazquez",
      age: 35,
      gender: "m",
      photoURL:
        "https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_businessman_male-512.png",
    },
  ];
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

  const kodersUI = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => (
      <div key={index} className="card-container">
        <div className="card-image-container">
          <img alt="profile" src={photoURL} className="card-image" />
        </div>
        <div className="dividerVert"></div>
        <div className="card-content">
          <CardItemContent title="Nombre:" text={`${firstName} ${lastName}`} />
          <div className="dividerHor">.</div>
          <CardItemContent title="Edad:" text={age} />
          <div className="dividerHor">.</div>

          <CardItemContent
            title="Genero:"
            text={gender === "m" ? "Masculino" : "Femenino"}
          />
        </div>
      </div>
    )
  );
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
      <div className="main-container">
        <div className="container">{kodersUI}</div>
      </div>
    </div>
  );
}

export default App;
