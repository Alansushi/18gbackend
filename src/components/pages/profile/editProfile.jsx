

import "./profile.css"
export default function EditProf() {
    return (
      <div className="home-container">
        <h2>EDITA TU PERFIL</h2>

        <img  alt=" oa"id="profilePic" src="https://cdn4.iconfinder.com/data/icons/universal-glyph/614/1018_-_Add_User-512.png"></img>

        <div className="datos">Nombre de usuario</div>
        {/* <input className="datos">Introduce nuevo nombre de usuario</input> */}
        
        <div className="datos">Email</div>

        <div className="datos">Celular</div>
        {/* <input className="datos">Introduce nuevo número celular</input> */}
        
      </div>
      
    );
  }