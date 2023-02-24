import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./reset.css";
import { AuthContext } from "./context/context";
import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {
  const [isAuth, setIsAuth] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
    setIsLoading(false);
  }, []);

  async function checkUser() {
    const { data, error } = await supabase.auth.updateUser({});

    setIsAuth(data);
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    setIsAuth(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, isLoading, signInWithGitHub, signout }}
    >
      <Router>
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
