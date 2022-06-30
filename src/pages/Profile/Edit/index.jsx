import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/retrieve";

import { PatchPerson } from "../../../services/editPerson";

import Input from "../../../component/input/input";

import "./Edit.css";
export default function ProfileEdit() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, steEmail] = useState("");
  const [photo, setPhoto] = useState("");

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
          <div className="form-container">
            <Input
              placeholder="First Name"
              value={user.firstName}
              callback={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Last Name"
              value={user.lastName}
              callback={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-container">
            <Input
              type="url"
              placeholder="Photo URL"
              value={user.photoURL}
              callback={(e) => setPhoto(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={user.email}
              callback={(e) => steEmail(e.target.value)}
            />
          </div>

          <button onClick={handleClick} id="ACTUALIZAR">
            ACTUALIZAR
          </button>
        </div>
      )}
    </div>
  );
}
