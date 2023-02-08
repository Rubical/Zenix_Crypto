const UserInfoCard = ({ data }) => {
  if (data) {
    return (
      <>
        <img className="search-image"></img>
        <p className="search-text">
          <span>Name: </span>
        </p>
        <p className="search-text">
          <span>City: </span>
        </p>
        <p className="search-text">
          <span>About: </span>
        </p>
        <p className="search-text">
          <span>E-mail: </span>
        </p>
      </>
    );
  } else {
    return <></>;
  }
};

export default UserInfoCard;
