import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./reset.css";
import { AuthContext } from "./context/context";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <Router>
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
