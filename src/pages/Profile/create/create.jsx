import { useState } from "react";
import "./create.css";

import { postPerson } from "../../../services/person";

export default function CreateProfile() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, steEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    console.log("jala");

    postPerson(name, lastName, email, photo, birthdate);
  };

  //   postButton.addEventListener(("click") => {
  //     console.log("jala");
  //   });

  return (
    <div className="createContainer">
      <input
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        id="lastName"
        type="text"
        placeholder="LastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => steEmail(event.target.value)}
      />

      <input
        id="photo"
        type="text"
        placeholder="Photo"
        value={photo}
        onChange={(event) => setPhoto(event.target.value)}
      />

      <input
        id="birthdate"
        type="date"
        placeholder="Birthdate"
        value={birthdate}
        onChange={(event) => setBirthdate(event.target.value)}
      />

      <button onClick={handleClick} id="create">
        Create
      </button>
    </div>
  );
}
