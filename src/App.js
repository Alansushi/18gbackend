import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home/Index";
import About from "./components/pages/About/Index";
import AppContainer from "./containers/AppContainer/index";

import Profile from "./components/pages/profile/profile";
import EditProf from "./components/pages/profile/editProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<p>Login</p>} />
        <Route path="/signup" element={<p>signup</p>} />
        <Route path="app" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />}>
            <Route path="edit" element={<EditProf />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
