import { Routes, Route } from "react-router-dom";
import "./App.css";

// Containers
import AppContainer from "./containers/AppContainer";
import ProfileContainer from "./containers/ProfileContainer";

// Components
import About from "./pages/About";
import Home from "./pages/Home/indexHome";
import ProfileDetail from "./pages/Profile/Detail";
import ProfileEdit from "./pages/Profile/Edit";
import CreateProfile from "./pages/Profile/create/create";
import ProfileList from "./pages/Profile/List/list";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="login" element={<p>Login</p>} />
        <Route path="signup" element={<p>Signup</p>} />
        <Route path="app" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfileContainer />}>
            <Route index element={<ProfileList />} />
            <Route path=":id" element={<ProfileDetail />} />
            <Route path="edit/:id" element={<ProfileEdit />} />

            <Route path="create" element={<CreateProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
