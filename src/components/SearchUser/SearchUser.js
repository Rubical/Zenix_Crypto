import { useState } from "react";

import SearchUserInput from "../SearchUserInput/SearchUserInput";
import UserInfoCard from "../UserInfoCard/UserInfoCard";

const SearchUser = () => {
  const [searchName, setSearchName] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`
    https://newsapi.org/v2/everything?q=software&from=2023-02-10&sortBy=publishedAt&apiKey=ba4d6c5338394be997a79771d2522499&language=en&pageSize=50&searchin=description
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

  const clearInput = () => {
    setSearchName("");
  };

  return (
    <>
      <SearchUserInput
        sendForm={sendForm}
        searchName={searchName}
        setSearchName={setSearchName}
        userInfo={userInfo}
      />

      <UserInfoCard
        clearInput={clearInput}
        searchName={searchName}
        deleteUserCard={deleteUserCard}
        userInfo={userInfo}
      />
    </>
  );
};

export default SearchUser;
