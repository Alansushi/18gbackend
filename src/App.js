// import { useState } from "react";
import { useState } from "react";
import "./App.css";
//components

// import Card from "./components/card";

// import "./components/Fullname/buttons.css";
// import { click } from "@testing-library/user-event/dist/click";
// function CardItemContent({ title, text }) {
//   return (
//     <div className="card-item-content">
//       <p className="title">{title}</p>
//       <p className="content">{text}</p>
//     </div>
//   );
// }

function App() {
  const [number, setNumber] = useState(0);
  const [dollar, setDollar] = useState(0);
  // const [firstName, setFirstName] = useState("");
  // const [koders, setKoders] = useState([
  //   {
  //     firstName: "Luis",
  //     lastName: "Vera",
  //     age: 24,
  //     gender: "f",
  //     photoURL:
  //       "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg",
  //   },
  //   {
  //     firstName: "Nestor",
  //     lastName: "Ramírez",
  //     age: 40,
  //     gender: "m",
  //     photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
  //   },
  //   {
  //     firstName: "David",
  //     lastName: "Romero",
  //     age: 28,
  //     gender: "m",
  //     photoURL:
  //       "https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png",
  //   },
  //   {
  //     firstName: "Yusef",
  //     lastName: "Lopéz",
  //     age: 40,
  //     gender: "f",
  //     photoURL: "https://media4.giphy.com/media/5sYyfIMRcpJWNqdySh/giphy.gif",
  //   },
  //   {
  //     firstName: "Alan",
  //     lastName: "Guerrero",
  //     age: 23,
  //     gender: "m",
  //     photoURL:
  //       "https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png",
  //   },
  //   {
  //     firstName: "Aaron",
  //     lastName: "Enciso",
  //     age: 24,
  //     gender: "f",
  //     photoURL:
  //       "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg",
  //   },
  //   {
  //     firstName: "Danny",
  //     lastName: "Vazquez",
  //     age: 40,
  //     gender: "m",
  //     photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
  //   },
  //   {
  //     firstName: "Danny",
  //     lastName: "Vazquez",
  //     age: 35,
  //     gender: "m",
  //     photoURL:
  //       "https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_businessman_male-512.png",
  //   },
  // ]);

  // const kodersUI = koders.map(
  //   ({ firstName, lastName, age, gender, photoURL }, index) => (
  //     <Card
  //       key={index}
  //       photoURL={photoURL}
  //       firstName={firstName}
  //       lastName={lastName}
  //       age={age}
  //       gender={gender}
  //     />
  //   )
  // );
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Agregar KODER");
  // };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a>
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Title text="Alans"></Title>
    //     <Nombre name="Alan" lastName="Guerrero"></Nombre>

    //     <p>Counter: {count}</p>
    //     <div>
    //       <button onClick={() => setCount(count + 1)}>More</button>
    //       <button onClick={() => setCount(count - 1)}>Less</button>
    //     </div>
    //     <p className={countClass}>
    //       Counter: {count}, {countType}
    //     </p>

    //     <button onClick={() => handleClick(true)}>Increase</button>
    //     <div
    //       className={countClassOdd}
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       {countTypeOdd}
    //     </div>
    //     <p
    //       onClick={() => handleClick2(1)}
    //       onMouseEnter={handleMouseEnter2}
    //       onMouseLeave={handleMouseLeave2}
    //       className={checkNumber(active)}
    //     >
    //       Getting Started
    //     </p>
    //     <p
    //       onClick={() => handleClick2(2)}
    //       onMouseEnter={handleMouseEnter2}
    //       onMouseLeave={handleMouseLeave2}
    //       className="2"
    //     >
    //       Add React to a website
    //     </p>
    //     <p
    //       onClick={() => handleClick2(3)}
    //       onMouseEnter={handleMouseEnter2}
    //       onMouseLeave={handleMouseLeave2}
    //     >
    //       Create a New react App
    //     </p>
    //     <p
    //       onClick={() => handleClick2(4)}
    //       onMouseEnter={handleMouseEnter2}
    //       onMouseLeave={handleMouseLeave2}
    //     >
    //       CDN Links
    //     </p>
    //   </header>
    <div className="main-container">
      {/* <div className="container">{kodersUI}</div>

      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <button>Agregar koders</button>
      </form>
      <div>"hola"</div> */}

      <input
        placeholder={`${number.toFixed(2)} pesos`}
        // value={`${number.toFixed(2)} pesos`}
        onChange={(event) => setDollar(Number(event.target.value) / 20.16)}
      ></input>
      {/* <button onClick={() => setNumber(number / 20.16)}>
        Convertir a dolares
      </button>
      <h3>La cantidad equivale a ${number.toFixed(2)}USD</h3> */}
      <input
        placeholder={`${dollar.toFixed(2)} dolares`}
        // value={`${dollar.toFixed(2)} dolares`}
        onChange={(event) => setNumber(Number(event.target.value) * 20.16)}
      ></input>
    </div>
  );
}

export default App;
