import { Outlet,Link } from "react-router-dom";
import "./profile.css"
export default function Profile() {
    return (
      <div className="home-container">
        <h2>BIENVENIDOS A TU PERFIL</h2>

        <img  alt=" oa"id="profilePic" src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"></img>

        <div className="datos">Nombre de usuario</div>
        
        <div className="datos">Email</div>

        <div className="datos">Celular</div>
        <Link to="edit">
        <button>Editar perfil</button></Link>

        
        <Outlet/>
        
      </div>
      
    );
  }