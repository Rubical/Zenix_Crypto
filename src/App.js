import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Main from "./pages/Main/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <Main />
      <Routes>
        {/* <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
