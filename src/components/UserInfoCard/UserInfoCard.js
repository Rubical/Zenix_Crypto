import React from "react";
import getPrettyDate from "../../utils/getPrettyDate";
import BtnGitHubSignIn from "./../BtnGitHubSignIn/BtnGitHubSignIn";
import deleteBtn from "./../../utils/close-btn.png";
import cl from "./UserInfoCard.module.css";

const UserInfoCard = ({ userInfo, deleteUserCard }) => {
  const showInfoOrNull = (info) => {
    if (info) {
      return info;
    } else {
      return "Not specified";
    }
  };

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
      Name: showInfoOrNull(name),
      Nickname: login,
      "Created at": getPrettyDate(new Date(created_at)),
      Location: showInfoOrNull(location),
      "E-mail": showInfoOrNull(email),
      Followers: followers,
      Following: following,
    };

    let users = [];

    for (let key in user) {
      users.push(
        <p className={cl.userInfo} key={Date.now()}>
          {key} : {user[key]}
        </p>
      );
    }

    return (
      <div id="box" className={cl.container + " " + cl.gradientBorder}>
        <button type="button" className={cl.deleteBtn} onClick={deleteUserCard}>
          <img src={deleteBtn}></img>
        </button>
        <img className={cl.userImg} src={showInfoOrNull(avatar_url)}></img>
        <hr />
        {users.map((user) => {
          return user;
        })}
        <BtnGitHubSignIn
          className={cl.btnGitHub}
          text={"Check profile"}
          link={html_url}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default UserInfoCard;
