import { useState } from "react";
import "./create.css";

import { postPerson } from "../../../services/person";

import Input from "../../../component/input/input";
// Toastify
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function CreateProfile() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, steEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const cleanForm = () => {
    setName("");
    setLastName("");
    setPhoto("");
    steEmail("");
    setBirthdate("");
  };
  const isEmpty = (value) => !value;

  const handleClick = (event) => {
    event.preventDefault();
    if (
      isEmpty(name) ||
      isEmpty(lastName) ||
      isEmpty(photo) ||
      isEmpty(email) ||
      isEmpty(birthdate)
    ) {
      // toast.error("Llena el form!!!!");
      return;
    }

    postPerson(name, lastName, email, photo, birthdate);
  };

  return (
    <div>
      <div className="form-container">
        <Input
          placeholder="First Name"
          value={name}
          callback={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          callback={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form-container">
        <Input
          type="url"
          placeholder="Photo URL"
          value={photo}
          callback={(e) => setPhoto(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          callback={(e) => steEmail(e.target.value)}
        />
        <Input
          type="date"
          placeholder="birthdate"
          value={birthdate}
          callback={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={handleClick} id="create">
          Create
        </button>
      </div>
    </div>
  );
}
