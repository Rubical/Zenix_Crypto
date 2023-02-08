import cl from "./BtnGitHub.module.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href="#!" target="_blank" rel="noreferrer" className={cl.btnGithub}>
      <img src={gitHubIcon} alt="" />
      Sign in via GitHub
    </a>
  );
};

export default BtnGitHub;
