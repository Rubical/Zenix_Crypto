// import SearchUser from "./components/SearchUser/SearchUser";

// function App() {
//   return <SearchUser />;
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
