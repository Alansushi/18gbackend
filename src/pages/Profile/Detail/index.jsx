import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/retrieve";

import { deleteUser } from "../../../services/deleteUser";

// CSS
import "./Detail.css";

export default function ProfileDetail() {
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const data = await retrieveUser(id);
      setTimeout(() => {
        setUser(data);
      }, 1000);
    };

    getUser();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    deleteUser(id);
    navigate(-1);
  };

  return (
    <div>
      <h2>Detail</h2>
      {!user ? (
        <p>Loading</p>
      ) : (
        <div>
          <img alt="oa" src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <button onClick={() => navigate(-1)}>Regresar</button>
          <button id="deleteButton" onClick={handleClick}>
            ELIMINAR
          </button>
        </div>
      )}
    </div>
  );
}
