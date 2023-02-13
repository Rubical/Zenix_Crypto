import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Main from "./pages/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import News from "./pages/News/News";

import "./reset.css";
import Profile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="search-a-user" element={<Main />} /> */
        <Route path="news" element={<News />} /> */
        <Route path="profile" element={<Profile />} /> */
      </Routes>
    </Router>
  );
}

export default App;
