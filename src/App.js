import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Main from "./pages/Main/Main";
import "./reset.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} /> */}
        <Route path="search-a-user" element={<Main />} /> */
      </Routes>
    </Router>
  );
}

export default App;
