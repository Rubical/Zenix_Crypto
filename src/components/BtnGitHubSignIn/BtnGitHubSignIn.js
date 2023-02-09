import cl from "./BtnGitHubSignIn.module.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={cl.btnGithub}>
      <img src={gitHubIcon} alt="" />
      {text}
    </a>
  );
};

export default BtnGitHub;
