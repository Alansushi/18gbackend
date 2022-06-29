import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
//components
// import CardItemContent from "../../component/cardItemContent";
//services
import { getCharacters } from "../../services/character";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacteresQuery = async () => {
      const data = await getCharacters();
      console.log(data);
      const arraToSet = data.results;
      setCharacters(arraToSet);
    };
    console.log(characters);
    getCharacteresQuery();
  }, []);
  const personajes = characters.map(
    ({ name, image, status, location }, index) => (
      <div key={index} className="card-container">
        <div className="card-image-container">
          <img alt="profile" src={image} className="card-image" />
        </div>
        <div className="dividerVert"></div>
        <div className="card-content">
          <p className="title">Nombre:</p>
          <p className="info">{name}</p>
          <div className="dividerHor"></div>
          <p className="title">Location:</p>
          <p className="info">{location.name}</p>
          <div className="dividerHor"></div>
          <p className="title">Status:</p>
          <p className="info">{status}</p>
        </div>
      </div>
    )
  );

  return (
    <div className="main-container">
      <div className="container">{personajes}</div>
    </div>
  );
}
