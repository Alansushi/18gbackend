import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/retrieve";

import { PatchPerson } from "../../../services/editPerson";

import "./Edit.css";
export default function ProfileEdit() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, steEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    console.log("jala");

    PatchPerson(name, lastName, email, photo, id);
  };
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();

  useEffect(() => {
    console.log("estamos en edit");

    const getUser = async () => {
      const data = await retrieveUser(id);
      setTimeout(() => {
        setUser(data);
      }, 3000);
      // console.log(data);
    };

    getUser();
  }, []);

  console.log(id);

  return (
    <div>
      <h2>Edit 2.0</h2>
      {!user ? (
        <p>Loading</p>
      ) : (
        <div>
          <img alt="oa" src={user.photoURL} />
          <input
            placeholder={user.photoURL}
            onChange={(event) => setPhoto(event.target.value)}
          />
          <input
            placeholder={user.firstName}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder={user.lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            placeholder={user.email}
            onChange={(event) => steEmail(event.target.value)}
          />

          <button onClick={handleClick} id="ACTUALIZAR">
            ACTUALIZAR
          </button>
        </div>
      )}
    </div>
  );
}
