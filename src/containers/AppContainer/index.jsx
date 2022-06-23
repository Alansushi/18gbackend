import { Outlet,Link } from "react-router-dom";
import "./Appcontainer.css";

export default function AppContainer(){
    return (
    <div>
        <nav id="navBar">
        <Link className="link" to="/">
          HOME
        </Link>
        <Link className="link" to="about">
          ABOUT
        </Link>
        <Link className="link" to="profile">
          PROFILE
        </Link>
      </nav>
      <Outlet />
    </div>
    )
}