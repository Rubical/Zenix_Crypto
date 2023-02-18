import SearchUser from "../../components/SearchUser/SearchUser";
import gitHubIcon from "./github-icon.svg";

import cl from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={cl.container}>
        <img className={cl.githubIcon} src={gitHubIcon}></img>
        <SearchUser />
      </div>
    </>
  );
};

export default Main;
