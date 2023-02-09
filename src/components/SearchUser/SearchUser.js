import { useState } from "react";
import SearchUserInput from "../SearchUserInput/SearchUserInput";
import UserInfoCard from "../UserInfoCard/UserInfoCard";

const SearchUser = () => {
  const [searchName, setSearchName] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`
    https://api.github.com/users/${searchName}
    `);

    if (response.ok) {
      const data = await response.json();
      setUserInfo(data);
      console.log(data);
    } else {
      alert("User not found");
    }
  };

  const deleteUserCard = () => {
    setUserInfo("");
  };

  return (
    <>
      <SearchUserInput
        sendForm={sendForm}
        searchName={searchName}
        setSearchName={setSearchName}
        userInfo={userInfo}
      />
      <UserInfoCard deleteUserCard={deleteUserCard} userInfo={userInfo} />
    </>
  );
};

export default SearchUser;
