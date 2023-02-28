import { useDispatch } from "react-redux";
import SearchUser from "../../components/SearchUser/SearchUser";
import gitHubIcon from "./github-icon.svg";
import { clearUserInfo } from "../../redux/userInfoSlice";
import { enableBodyScroll } from "../../utils/bodyScroll";

import cl from "./GitHubHelper.module.css";

const GitHubHelper = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          dispatch(clearUserInfo());
          enableBodyScroll();
        }}
        className={cl.container}
      >
        <img className={cl.githubIcon} src={gitHubIcon}></img>
        <SearchUser />
      </div>
    </>
  );
};

export default GitHubHelper;
