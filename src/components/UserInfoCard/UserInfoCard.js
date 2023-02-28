import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import getPrettyDate from "../../utils/getPrettyDate";
import ShareInSocials from "../ShareInSocials/ShareInSocials";
import { clearSearchName } from "../../redux/searchNameSlice";
import { clearUserInfo } from "../../redux/userInfoSlice";
import { enableBodyScroll, disableBodyScroll } from "./../../utils/bodyScroll";

const UserInfoCard = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const clearInput = () => {
    dispatch(clearSearchName());
  };

  const deleteUserCard = () => {
    dispatch(clearUserInfo());
  };

  useEffect(() => {
    clearInput();
  }, [userInfo]);

  if (userInfo) {
    disableBodyScroll();
    const {
      login,
      avatar_url,
      created_at,
      email,
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
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 330,
          boxShadow: 24,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
          onClick={() => {
            deleteUserCard();
            enableBodyScroll();
          }}
        ></CloseIcon>

        <Box
          component="img"
          src={avatar_url}
          alt="image"
          sx={{
            width: "330px",
            justifySelf: "center",
            marginBottom: "20px",
          }}
        />
        <CardContent>
          {users.map((user) => {
            return (
              <div key={Object.keys(user)}>
                <Typography sx={{ fontSize: "17px" }} variant="h6">
                  {Object.keys(user) + ": " + Object.values(user)}
                </Typography>
                <hr style={{ margin: "5px" }} />
              </div>
            );
          })}
        </CardContent>
        <CardActions disableSpacing>
          <ShareInSocials description={"Hello from Rubical!"} />
        </CardActions>
      </Card>
    );
  }
};

export default UserInfoCard;
