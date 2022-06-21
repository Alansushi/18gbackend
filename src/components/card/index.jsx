import "./card.css"

import "../card-item-content"
import CardItemContent from "../card-item-content"
export default function Card({
    photoURL, 
    firstName,
    lastName,
    age,
    gender,
  }) {
    return (
      <div className="card-container">
        <div className="card-image-container">
          <img alt="profile" src={photoURL} className="card-image" />
        </div>
        <div className="card-content">
          <CardItemContent contenido={`${firstName} ${lastName}`} titulo="Nombre:"
                      
            />
          <CardItemContent contenido={age} titulo="Edad:"
                      
            />
            <CardItemContent contenido={gender === "m" ? "Masculino" : "Femenino"} titulo="Género"
                      
            />
          
        </div>
      </div>
    );
  }