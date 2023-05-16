import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AppRouter from "./AppRouter";
import "./reset.css";
import { AuthContext } from "./context/context";
import { useEffect } from "react";
import { supabase } from "./client";
import { useDispatch, useSelector } from "react-redux";
import { logInGithub, logOutGithub } from "./redux/githubAuthSlice";
import { loadingStop } from "./redux/loadingSlice";

function App() {
  const githubAuth = useSelector((state) => state.githubAuth.user);
  const anonAuth = useSelector((state) => state.anonAuth);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
    dispatch(loadingStop);
  }, []);

  async function checkUser() {
    const { data, error } = await supabase.auth.updateUser({});
    dispatch(logInGithub(data));
  }

  async function signInWithGitHub() {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://rubical.github.io/Zenix_Crypto/",
        scopes: "repo user project",
      },
    });

    if (error) {
      alert(error.message);
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    dispatch(logOutGithub());
  }

  return (
    <AuthContext.Provider
      value={{
        signInWithGitHub,
        signout,
      }}
    >
      <Router>
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
