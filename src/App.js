import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./reset.css";
import { AuthContext } from "./context/context";
import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {
  const [isAuth, setIsAuth] = useState({ user: null });
  const [anonAuth, setAnonAuth] = useState(false);
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
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/github-API/",
        scopes: "repo user project",
      },
    });

    if (error) {
      alert(error.message);
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    setIsAuth(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        signInWithGitHub,
        signout,
        anonAuth,
        setAnonAuth,
      }}
    >
      <Router>
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
