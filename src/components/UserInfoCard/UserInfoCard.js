import React, { useEffect } from "react";
import getPrettyDate from "../../utils/getPrettyDate";
import BtnGitHubSignIn from "./../BtnGitHubSignIn/BtnGitHubSignIn";
import deleteBtn from "./../../utils/close-btn.png";
import iconShare from "./../../utils/icon-share.png";
import cl from "./UserInfoCard.module.css";

const UserInfoCard = ({ userInfo, deleteUserCard, clearInput }) => {
  useEffect(() => {
    clearInput();
  }, [userInfo]);

  if (userInfo) {
    const {
      login,
      avatar_url,
      created_at,
      email,
      html_url,
      location,
      followers,
      following,
      name,
    } = userInfo;

    let user = {
      Name: name,
      Nickname: login,
      "Created at": getPrettyDate(new Date(created_at)),
      Location: location,
      "E-mail": email,
      Followers: followers,
      Following: following,
    };

    let users = [];
    for (let key in user) {
      if (user[key]) {
        users.push({ [key]: user[key] });
      }
    }

    return (
      <div id="box" className={cl.container + " " + cl.gradientBorder}>
        <button type="button" className={cl.deleteBtn} onClick={deleteUserCard}>
          <img src={deleteBtn}></img>
        </button>
        <img className={cl.userImg} src={avatar_url}></img>
        <hr />
        {users.map((user) => {
          return (
            <p className={cl.userInfo} key={Object.keys(user)}>
              {Object.keys(user) + ": " + Object.values(user)}
            </p>
          );
        })}
        <div className={cl.flexRow}>
          <BtnGitHubSignIn
            className={cl.btnGitHub}
            text={"Check profile"}
            link={html_url}
          />
          <button className={cl.iconShareBtn}>
            <img src={iconShare} className={cl.iconShareBtnImg}></img>
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default UserInfoCard;
