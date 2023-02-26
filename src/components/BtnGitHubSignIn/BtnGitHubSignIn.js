import { useContext } from "react";
import { AuthContext } from "../../context/context";
import cl from "./BtnGitHubSignIn.module.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = ({ text }) => {
  const { signInWithGitHub } = useContext(AuthContext);

  return (
    <button className={cl.btnGithub} onClick={signInWithGitHub}>
      <img src={gitHubIcon} alt="" />
      {text}
    </button>
  );
};

export default BtnGitHub;
